function Mood() {

    const happy = false

  return (
    <>
        {happy ? <img src="OIP.png"/>: <img src="frowny.png"/>}
    </>
  )
}

export default Mood