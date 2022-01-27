const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const { addId } = require("./idsControllers");

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
        user: process.env.OWNER_EMAIL, // generated ethereal user
        pass: process.env.OWNER_PASS, // generated ethereal password
      },
    });

    const id = uuidv4();
    let info = await transporter.sendMail({
      from: "Book rental",
      to: req.body.email,
      subject: "Invitation",
      html: `<h2>Hey and welcome</h2>
            <div>
                <b>I'm so happy to have you as part of our community!</b> 🥳<br>
                <b>Please feel free to proceed with your inscription by clicking the link below.</b><br>
            <a href='http://localhost:3000/registration/${id}'>create account now</a><br><br>
            All the best,
            </div>`,
    });
    res.status(202).json({
      status: "Success",
    });
    addId(id, req.body.email);
  } catch (err) {
    res.status(406).json({
      status: "Failure",
      message: err.message || "cannot send email",
    });
  }
};
