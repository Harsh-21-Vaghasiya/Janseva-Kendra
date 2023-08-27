const logincheak = async (req, res) => {
    console.log("this is logincheak");
};


const signupcheak = async (req, res) => {
    console.log("this is signncheak");
};

const signuppage = async (req, res) => {
    console.log("this is signup");
};




const loginpage = async (req, res) => {
    try {
        // const office = await Office.find({});
        res.status(200).render('login')
    } catch (err) {
        console.log(err);

    }
};








module.exports = { logincheak, signupcheak, loginpage, signuppage };