const form = document.getElementById('libform')
const button = document.getElementById('lib-button')
const story = document.getElementById('story')

form.addEventListener('click', function(e){
    e.preventDefault()
        const noun = document.getElementById('noun').value
        const adjective = document.getElementById('adjective').value
        const person = document.getElementById('person').value
        const verb = document.getElementById('verb').value
        const place = document.getElementById('place').value
        
        if(noun == '' || adjective == ''|| person == ''|| adjective == ''|| verb == ''|| place == ''){
            return;
        } else {
            const newStory = `Once upon a time, ${noun} was very ${adjective}. ${noun} decided to go to ${person}'s ${place} and ${verb} this person`;
            story.append(newStory)
        }
    
})