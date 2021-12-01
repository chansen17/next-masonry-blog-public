import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const ThemeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div className="theme-btn">
            <IconButton _hover={{bg: null}} bg="gray.600" mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
                { colorMode === 'light' ? <MoonIcon color="#fff"/> : <SunIcon color="#fff"/> }
            </IconButton>
        </div>
    )
}

export default ThemeBtn
