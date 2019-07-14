watchman watch-del-all
kill $(lsof -t -i:8081)

rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

## new ios and android 
react-native upgrade --legacy true;


