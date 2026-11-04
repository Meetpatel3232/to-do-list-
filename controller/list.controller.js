
const List=require("../model/list.model");
const addList = async (req, res) => {
    try {
        const { userid, text, completed } = req.body;

        const list = await List.create({
             userid,
            text,
            completed
        });

        return res.status(201).json({
            success: true,
            message: "Task added successfully",
            data: list
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = { addList };

const getList=async(req,res)=>{
const {userid}=req.body;
   try {
    const list=await List.find({
      userid
    })   

    return res.status(201).json({
        success:true,
        message:"fetch the list",
        data:list
    })
 

   } catch (error) {
    return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
   }



}


module.exports={getList,addList};