function get_background_color(){
    const color = getComputedStyle(document.body).getPropertyValue('--background')
    return color ;
}

function set_titlebar_color(){
    const theme_color_meta = document.querySelector('meta[name="theme-color"]')
    const color = get_background_color();
    theme_color_meta?.setAttribute('content', color)
}

function toggle_color_theme(){
    const storage_value = localStorage.getItem('dark')
    document.body.classList.toggle('dark')
    localStorage.setItem('dark', storage_value === 'true' ? 'false' : 'true')
    set_titlebar_color()
}

function start(){
    const is_dark = localStorage.getItem('dark')
    const body = document.body
    const theme_switch = document.querySelector('.switch')
    const checkbox = theme_switch.getElementsByTagName('input')[0]
    
    
    if (is_dark === 'true'){
        body.classList.add('dark')
        checkbox.checked = 1
    }
    set_titlebar_color()
}

start()