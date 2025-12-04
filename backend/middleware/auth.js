import jwt from 'jsonwebtoken';

const authMiddleware  = async(req,res,next) => {
const {token} =req.headers;
if(!token) {
    return res.json({success:false,message:"Not Authorized Login Again"})
}
try{
    const token_decode = jwt.verify(token,process.env.JWT_SECRET);
    req.userId = token_decode.id;
    next();
}catch(error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
}

export default authMiddleware;


// import jwt from 'jsonwebtoken';

// const authMiddleware = async (req, res, next) => {
//   try {
//     let token = req.headers.token;

//     // If token is not in 'token' header, check Authorization header
//     if (!token && req.headers.authorization) {
//       const parts = req.headers.authorization.split(" ");
//       if (parts[0] === "Bearer" && parts[1]) {
//         token = parts[1];
//       }
//     }

//     if (!token) {
//       return res.json({
//         success: false,
//         message: "Not Authorized. Login Again"
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.userId = decoded.id;
//     next();
//   } catch (error) {
//     console.log("JWT Error:", error);
//     return res.json({
//       success: false,
//       message: "Invalid or expired token"
//     });
//   }
// };

// export default authMiddleware;
