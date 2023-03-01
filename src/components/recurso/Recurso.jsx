import axios from 'axios';


const Recurso = () => {
    axios.post('https://projeto-modulo3-resilia.onrender.com/Tatuadores', { dados: 'exemplo' })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
}

export default Recurso;