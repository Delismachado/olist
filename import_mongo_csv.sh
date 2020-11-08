IDCONTAINER=`docker ps -qf "name=mongo"`
docker cp category.csv $IDCONTAINER:/
#docker exec $IDCONTAINER ls /
docker exec $IDCONTAINER mongoimport \
  --host=127.0.0.1 \
  -d nodeapi \
  -c categories \
  --type csv \
  --file /category.csv \
  --headerline