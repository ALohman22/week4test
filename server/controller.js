const fortunes = ['Strong reasons make strong actions.', 'Sloth makes all things difficult; industry all easy.', 'Now is the time to try something new', 'It is better to deal with problems before they arise.', 'Good to begin well, better to end well.', 'Go for the gold today! You’ll be the champion of whatever.'];
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        res.status(200).send(fortunes);
    },

    deleteFortune: (req,res) => {
        let { index } = req.params
        fortunes.splice(index,1)
        res.status(200).send(fortunes);
    },

    addFortune: (req,res) => {
        console.log(req.body)
         let { fortune } = req.body
        fortunes.push(fortune)
        res.status(200).send(fortunes)
    },

    editFortune: (req,res) => {
        console.log(req.params)
        let { index } = req.params
        let { fortune } = req.body
        fortunes[index] = fortune
        res.status(200).send(fortunes)

    }

}