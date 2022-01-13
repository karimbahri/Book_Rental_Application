const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

exports.addUser = async (req, res) => {
  if (!req.body) {
    return res.status(403).json({
      status: "Failure",
      message: "Cannot post empty object",
    });
  }
  try {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "med.hedi.marrakchi@gmail.com", // generated ethereal user
        pass: "Mm)`hvW7sPn\\>72]", // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: "Book rental",
      to: req.body.email,
      subject: "Invitation",
      html: `<h2>Hey and welcome</h2>
            <div>
                <b>We are so happy to have you as part of our community!</b> 🥳<br>
                <b>Please feel free to proceed with your subscription by clicking the link below.</b><br>
            <a href='http://localhost:3000/registration/${uuidv4()}'>create account now</a><br><br>
            All the best,
            </div>`,
    });
    res.status(202).json({
      status: "Success",
    });
  } catch (err) {
    res.status(406).json({
      status: "Failure",
      message: err.message || "cannot send email",
    });
  }
};
