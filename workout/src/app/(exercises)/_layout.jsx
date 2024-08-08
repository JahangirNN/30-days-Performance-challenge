import { Slot, Stack } from "expo-router";

export default function RootLayout() {
    return( <Stack>
        <Stack.Screen name="index" options={{ title:'Exercises' }} />
        <Stack.Screen name="[name]"/>
    </Stack>)
}