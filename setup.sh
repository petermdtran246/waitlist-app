#!/bin/bash
sudo apt update
sudo apt install -y mysql-server
sudo service mysql start
sudo mysql -e "CREATE USER 'peter'@'localhost' IDENTIFIED BY 'password';"
sudo mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'peter'@'localhost' WITH GRANT OPTION;"
echo "✅ MySQL ready! Use: mysql -u peter -p"

# Nếu mày muốn MySQL tự start mỗi lần container khởi động, thêm dòng này vào cuối file setup.sh
sudo systemctl enable mysql


# Và khi Codespace restart → chỉ cần chạy: ./setup.sh
