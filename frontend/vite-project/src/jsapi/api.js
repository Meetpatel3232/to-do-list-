import api from "./axios";

export const HandleLogin=async(formdata)=>{
    const {username,email,password}=formdata;
   
   
        const response =await api.post("/login",{
            username,
            email,
            password
        })
        return response.data;
  


}

export const getList = async () => {
    try {
        const response = await api.get("/getList");

        console.log("GET LIST RESPONSE:", response.data);

        return response.data;

    } catch (error) {
        console.log(error.response?.data || error.message);
        throw error;
    }
};

export const addList = async (text) => {
    try {
        const response = await api.post("/addList", {
            text
        });

        return response.data;

    } catch (error) {
       console.log(error);
       
    }
};
