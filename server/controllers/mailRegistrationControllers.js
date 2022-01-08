const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require('uuid');

exports.addUser = async (req, res) => {
    if (!req.body) {
        return res
        .status(403)
        .json({
            status: 'Failure',
            message: 'Cannot post empty object'
        })
    }
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "med.hedi.marrakchi@gmail.com", // generated ethereal user
              pass: "Mm)`hvW7sPn\\>72]", // generated ethereal password
            },
          });
    
        let info = await transporter.sendMail({
            from: 'Book rental',
            to: req.body.email,
            subject: "Invitation",
            text: `http://localhost:3000/registration/${uuidv4()}`,
            // html: "<b></b>",
          });
        res
        .status(202)
        .json({
            status: 'Success'
        })
    }
    catch(err) {
        res
        .status(406)
        .json({
            status: 'Failure',
            message: err.message || "cannot send email"
        })
    }

}
