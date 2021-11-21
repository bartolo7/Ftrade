
# Stop all emulators 
adb devices | grep emulator | cut -f1 | while read line; do adb -s $line emu kill; done &
PROCESS_ID=$!
wait $PROCESS_ID

# List emulators and launch the first in the list
FIRST_EMU=$(emulator -list-avds) && $(which emulator) -avd "$FIRST_EMU" &
sleep 2

# Check if the app is installed 
INSTALLED=$(adb shell pm list packages | grep com.ftrade.app) 

# Remove app 
if [ ! -z "$INSTALLED" ]; then
   echo "Removing app"
   adb uninstall com.ftrade.app
else
   echo "There is not app installed"
fi



