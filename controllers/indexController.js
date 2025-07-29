const getIndex = (req, res) => {
    const animals = ["Cat", "Dog", "Lemur", "Hawk"];
    res.render("index", { animals });


}
module.exports = {
    getIndex
};