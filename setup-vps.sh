#!/bin/bash

# 🔧 سكريبت الإعداد الأولي لـ Hostinger VPS
# الاستخدام: ./setup-vps.sh

set -e

# الألوان
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🔧 إعداد Hostinger VPS لـ Next.js${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# المتغيرات
read -p "أدخل رابط GitHub Repository: " REPO_URL
read -p "أدخل اسم النطاق (مثل: balgh.cloud): " DOMAIN
read -p "أدخل GEMINI_API_KEY: " GEMINI_KEY
read -p "أدخل SPREADSHEET_ID: " SHEET_ID

PROJECT_NAME="balghapp"
PROJECT_DIR="/var/www/$PROJECT_NAME"

echo ""
echo -e "${BLUE}📋 ملخص الإعدادات:${NC}"
echo -e "   Repository: $REPO_URL"
echo -e "   Domain: $DOMAIN"
echo -e "   Project Dir: $PROJECT_DIR"
echo ""
read -p "هل تريد المتابعة؟ (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

# 1. تحديث النظام
echo -e "${BLUE}📦 الخطوة 1/10: تحديث النظام...${NC}"
sudo apt update && sudo apt upgrade -y
echo -e "${GREEN}✅ تم التحديث${NC}"
echo ""

# 2. تثبيت Node.js
echo -e "${BLUE}📦 الخطوة 2/10: تثبيت Node.js...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
echo -e "${GREEN}✅ تم تثبيت Node.js${NC}"
echo ""

# 3. تثبيت Git
echo -e "${BLUE}📦 الخطوة 3/10: تثبيت Git...${NC}"
sudo apt install git -y
git --version
echo -e "${GREEN}✅ تم تثبيت Git${NC}"
echo ""

# 4. استنساخ المشروع
echo -e "${BLUE}📥 الخطوة 4/10: استنساخ المشروع...${NC}"
sudo mkdir -p /var/www
cd /var/www
sudo git clone $REPO_URL $PROJECT_NAME
sudo chown -R $USER:$USER $PROJECT_DIR
cd $PROJECT_DIR
echo -e "${GREEN}✅ تم استنساخ المشروع${NC}"
echo ""

# 5. إعداد المتغيرات البيئية
echo -e "${BLUE}🔐 الخطوة 5/10: إعداد المتغيرات البيئية...${NC}"
cat > $PROJECT_DIR/.env.local << EOF
GEMINI_API_KEY=$GEMINI_KEY
SPREADSHEET_ID=$SHEET_ID
EOF
echo -e "${GREEN}✅ تم إنشاء .env.local${NC}"
echo ""

# 6. تثبيت المكتبات
echo -e "${BLUE}📦 الخطوة 6/10: تثبيت المكتبات...${NC}"
npm install
echo -e "${GREEN}✅ تم تثبيت المكتبات${NC}"
echo ""

# 7. بناء المشروع
echo -e "${BLUE}🔨 الخطوة 7/10: بناء المشروع...${NC}"
npm run build
echo -e "${GREEN}✅ تم بناء المشروع${NC}"
echo ""

# 8. تثبيت PM2
echo -e "${BLUE}📦 الخطوة 8/10: تثبيت PM2...${NC}"
sudo npm install -g pm2
pm2 start npm --name "$PROJECT_NAME" -- start
pm2 save
pm2 startup
echo -e "${YELLOW}⚠️  انسخ الأمر أعلاه ونفذه${NC}"
echo -e "${GREEN}✅ تم تثبيت PM2${NC}"
echo ""

# 9. تثبيت وإعداد Nginx
echo -e "${BLUE}📦 الخطوة 9/10: تثبيت Nginx...${NC}"
sudo apt install nginx -y

# إنشاء ملف إعدادات Nginx
sudo tee /etc/nginx/sites-available/$PROJECT_NAME > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
echo -e "${GREEN}✅ تم إعداد Nginx${NC}"
echo ""

# 10. إعداد SSL
echo -e "${BLUE}🔐 الخطوة 10/10: إعداد SSL...${NC}"
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
echo -e "${GREEN}✅ تم إعداد SSL${NC}"
echo ""

# إعداد Firewall
echo -e "${BLUE}🔥 إعداد Firewall...${NC}"
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
echo "y" | sudo ufw enable
sudo ufw status
echo -e "${GREEN}✅ تم إعداد Firewall${NC}"
echo ""

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ تم الإعداد بنجاح! 🎉${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📋 الخطوات التالية:${NC}"
echo -e "   1. افتح https://$DOMAIN في المتصفح"
echo -e "   2. للنشر المستقبلي، استخدم: ./deploy.sh"
echo -e "   3. لمتابعة السجلات: pm2 logs $PROJECT_NAME"
echo ""
