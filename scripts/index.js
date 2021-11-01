function Dropdown_answer(a) {
    if (document.getElementById(a).getElementsByTagName('p')[1].style.display == '' || document.getElementById(a).getElementsByTagName('p')[1].style.display == 'none') {
        for (let i = 0; i < document.getElementsByClassName('answers').length; i++) {
            if (document.getElementsByClassName('answers')[i].style.display == 'block') {
                document.getElementsByClassName('answers')[i].style.display = 'none';
            }
        }
        for (let i = 0; i < document.getElementsByClassName('questions').length; i++) {
            if (document.getElementsByClassName('questions')[i].getElementsByTagName('p')[0].style.fontWeight == 'bold') {
                document.getElementsByClassName('questions')[i].getElementsByTagName('p')[0].style.fontWeight = document.getElementsByClassName('questions')[i].getElementsByTagName('p')[0].style.color = '';
                document.getElementsByClassName('questions')[i].getElementsByTagName('img')[0].style.transform = 'scaleY(1)';
            }
        }
        document.getElementById(a).getElementsByTagName('p')[1].style.display = 'block';
        document.getElementById(a).getElementsByTagName('p')[0].style.color = 'hsl(238, 29%, 16%)';
        document.getElementById(a).getElementsByTagName('p')[0].style.fontWeight = 'bold';
        document.getElementById(a).getElementsByTagName('p')[0].getElementsByTagName('img')[0].style.transform = 'scaleY(-1)';
    }
    else {
        document.getElementById(a).getElementsByTagName('p')[1].style.display = 'none';
        document.getElementById(a).getElementsByTagName('p')[0].style.color = document.getElementById(a).getElementsByTagName('p')[0].style.fontWeight = '';
        document.getElementById(a).getElementsByTagName('p')[0].getElementsByTagName('img')[0].style.transform = 'scaleY(1)';
    }
}


