import moment from "moment"; 
 export const analyze=(text) =>{
    if(text.includes('hi')||text.includes('hai') ||text.includes('hello')){
        const h= moment().format('h');
        const a= moment().format('a');
        if(h>3&&h<11&&a==='pm')
            return 'Hi ,Sir Good Evening ! ! !'
        if(h==12||h<=3 &&a==='pm')
            return 'Hi, Sir Good Afternoon '
        if(h<12&&h>3&&a==='am');
             return ' Hi, Sir Happy Morning ! ! !'
    }
    else if(text.includes('time'))
    {
        const time=moment().format('h:mm:ss:a ');
        return time;
    }
    else if(text.includes('Date')||text.includes('date'))
    {
        const date=moment().format('DD : MM : YYYY ');
        return date;
    }
    else if(text.includes('linkedin'))
        return <a href="https://www.linkedin.com">Linkedin</a>
    else if(text.includes('google'))
        return <a href="https://www.google.com">Google</a>
    else if(text.includes('github'))
        return <a href="https://www.github.com">Github</a>
    else if(text.includes('facebook'))
        return <a href="https://www.facebook.com">Github</a>
    else if(text.includes('bye')||text.includes('Bye')||text.includes('Thanks')||text.includes('end'))
        return "Bye Sir! Have a Nice Day"
    else if(text.includes('insta')||text.includes('instagram'))
        return <a href="https://www.instagram.com/">Instagram</a>
    return "I cann't understand :( ,Try Again?"
}