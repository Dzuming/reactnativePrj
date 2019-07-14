
watchman watch-del-all
kill $(lsof -t -i:8081)

rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

## cache clear 


## new ios and android 

rm -rf node_modules;
rm -rf ios;
rm -rf android;
yarn install;
rm -rf ios/build/; kill $(lsof -t -i:8081); 
react-native upgrade --legacy true;
cd ios;
pod install;
react-native run-ios

## error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65 

Go to project settings in Xcode. Menu File->Project Settings

Go to per-User Project Settings section.

Click on advanced.

Select Xcode Default option. previously this used to be Legacy for my project.

## No bundle URL present.

rm -rf node_modules; yarn install
rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

## null is not an object (evaluating '_RNGestureHandlerModule.default.Direction')
watchman watch-del-all
kill $(lsof -t -i:8081)
react-native start --reset-cache
