// import React, { Component } from "react"
// import api from "../services/api"
// import './New.css';

// class FormPost extends Component {


//     constructor(props) {
//         super(props);

//         this.state = {
//             author: "",
//             place: "",
//             description: "",
//             file: null
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleChangeFile = this.handleChangeFile.bind(this);
//         this.subimit = this.subimit.bind(this);

//     }

//     handleChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     handleChangeFile(e) {
//         this.setState({ file: e.target.files[0] });
//     }


//     getHastag(description = "") {
//         const arrayDescription = description.split(" ")

//         const hastag = arrayDescription.reduce((reducer, data) => {
//             if (data.charAt(0) === "#") {
//                 return `${reducer} ${data}`
//             }
//             return reducer
//         }, "")

//         return hastag


//     }


//     async subimit() {

//         const formPost = new FormData()
//         formPost.append("image", this.state.file)
//         formPost.append("author", this.state.author)
//         formPost.append("place", this.state.place)
//         formPost.append("description", this.state.description)
//         formPost.append("hashtags", this.getHastag(this.state.description))


//         const apiret = await api.post('posts', formPost)
//         console.log(apiret)
        
//     }

//     render() {
//         return (
//             <div>
//                 <form id="new-post">
//                     <input onChange={this.handleChangeFile} name="file" type="file"></input>
//                     <input type="text" placeholder="Nome" name="author" onChange={this.handleChange} value={this.state.author}   ></input>
//                     <input type="text" placeholder="Lugar" name="place" onChange={this.handleChange} value={this.state.place} ></input>
//                     <input type="text" placeholder="Descricao" name="description" onChange={this.handleChange} value={this.state.description} ></input>
                  
//                 </form>
//                 <button onClick={this.subimit} >Enviar</button>
//             </div>
//         )
//     }
// }


// export default FormPost