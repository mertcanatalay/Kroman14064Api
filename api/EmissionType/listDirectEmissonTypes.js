import response from "../../response.js";

const listDirectEmissonTypes = async (req, res) => {
    try {

        let directEmissionTypes = await req.db("DirectEmissionTypes").select().catch(console.error);

        response.data = directEmissionTypes;
        response.message = "SUCCESS";
        response.success = true;
        res.json(response)

    } catch (error) {
        console.log(error)
    }

}

export default listDirectEmissonTypes;