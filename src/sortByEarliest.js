
import react from "react"


   export default sortByEarliest() 
   { 

    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }
