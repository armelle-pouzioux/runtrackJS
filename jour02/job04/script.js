const textarea = document.getElementById('keylogger');

function handleKeyDown(event) {
    
    if (/^[a-z]$/i.test(event.key)) {
        
        if (document.activeElement === textarea) {
            
            textarea.value += event.key ;
        } else {
        
            textarea.value += event.key;
        }
    }
}

document.addEventListener('keydown', handleKeyDown);