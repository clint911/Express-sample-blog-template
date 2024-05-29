export const get_user_profile_by_id = async (req, res) => {
  try {

    ///Note that we grab the user_id from the request body 
    res.status(200).send({ message: `get user profile by id ${req.params.user_id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message })

  }
}
export const update_user_profile_by_id = async (req, res) => {
  try {
    return res.status(200).send({
      message: `update_user_profile_by_id ${req.params.user_id}`
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const test = async (req, res) => {
  try {
    throw new Error("test error: this error is deliberately thrown to test the error handling")
    return res.status(200).send({
      message: "test"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}
