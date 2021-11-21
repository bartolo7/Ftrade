
if [ ! -z $1 ] && [[ $1 == "ios" ]]; then
    echo "Building IOS"
    xcodebuild -workspace ios/<your_workspace_name>.xcworkspace -scheme <your_scheme_name> -configuration Release -UseModernBuildSystem=0 -sdk iphonesimulator -derivedDataPath ios/build RCT_METRO_PORT=8088 
fi

if [ ! -z $1 ] && [[ $1 == "android" ]]; then
    echo "Building Android"
    RCT_METRO_PORT=8086 ./android/gradlew assembleRelease -p android/
   
fi

