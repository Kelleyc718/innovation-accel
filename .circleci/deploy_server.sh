sudo docker-compose down
sudo rm -rf /home/ubuntu/app
mkdir /home/ubuntu/app
cd /home/ubuntu/app
git clone https://github.com/Kelleyc718/innovation-accel.git
cd innovation-accel
sudo docker-compose up