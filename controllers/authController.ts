let res: Response;
let req: Request;

export const register_user = (req, res) => {
  try {
    return res.status(200).send({
      message: "registered user sucessfully"
    })
  } catch (error) {
    return res.status(500).json(({ message: error.message }))
  }
}

export const login = (req, res) => {
  try {
    return res.status(200).send({
      message: "User logged in sucessfully"
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })

  }
}

export const test = (req, res) => {
  try {

    return res.status(200).send({ message: "Test Huh" })
  } catch (error) {
    return res.status(500).json({ message: error.message })

  }
}

