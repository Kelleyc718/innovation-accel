cd /home/ubuntu/app/innovation-accel
sudo docker-compose down
cd ..
sudo rm -rf /home/ubuntu/app/innovation-accel
git clone https://github.com/Kelleyc718/innovation-accel.git
cd innovation-accel
sudo docker-compose up -d