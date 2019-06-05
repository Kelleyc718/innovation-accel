mkdir -p /home/ubuntu/app/innovation-accel
cd /home/ubuntu/app/innovation-accel
sudo docker-compose down
cd ..
sudo rm -rf /home/ubuntu/app/innovation-accel
git clone https://github.com/Kelleyc718/innovation-accel.git
cp config/wallet/* innovation-accel/server/wallet
cp config/certs/* innovation-accel/server/certs
cd innovation-accel
sudo docker-compose up --build -d