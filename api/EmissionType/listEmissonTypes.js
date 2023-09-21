import response from "../../response.js";

const listEmissonTypes = async (req, res) => {
    try {
        let cities = await req.db("EmissionTypes").select().catch(console.error);

        response.data = cities;
        response.message = "SUCCESS";
        response.success = true;
        res.json(response)

    } catch (error) {
        console.log(error)
    }

}

export default listEmissonTypes;