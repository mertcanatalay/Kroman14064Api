import response from "../../response.js";

const listOilType = async (req, res) => {
    try {

        let listOilType = await req.db("OilTypes").select().catch(console.error);

        response.data = listOilType;
        response.message = "SUCCESS";
        response.success = true;
        res.json(response)

    } catch (error) {
        console.log(error)
    }

}

export default listOilType;