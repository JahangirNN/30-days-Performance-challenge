import { Slot, Stack } from "expo-router";

export default function RootLayout() {
    return( <Stack>
        <Stack.Screen name="[data]" options={{headerShown:false}}/>
    </Stack>)
}