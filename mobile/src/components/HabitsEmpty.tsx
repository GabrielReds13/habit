import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native"

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você não tem hábitos existentes...{" "}

      <Text 
        className="text-violet-400 text-base font-bold underline active:text-violet-500"
        onPress={() => navigate("new")}  
      >
        Que tal criar um novo hábito.
      </Text>
    </Text>
  )
}
