#Make a folder
mkdir -p /home/ubuntu/app/innovation-accel

#Change to the directory containing the docker-compose file
cd /home/ubuntu/app/innovation-accel

#Bring down current docker containers
sudo docker-compose down

#Move up a directory and delete that directory
cd ..
sudo rm -rf /home/ubuntu/app/innovation-accel

#Pull down the code
git clone https://github.com/Kelleyc718/innovation-accel.git

#Copy the wallet file into the code directory structure
cp config/wallet/* innovation-accel/server/wallet

#Copy the certs and ssl config into the code directory structure
cp -R config/snippets innovation-accel/client/certs/
cp -R config/ssl innovation-accel/client/certs/

#Change directories into the project's directory and bring up the
#Docker containers
cd innovation-accel
sudo docker-compose up --build -d