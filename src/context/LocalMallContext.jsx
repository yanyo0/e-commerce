import { useState, createContext } from "react";
import { db } from "../firebaseConfig"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"




export const LocalMallContext = createContext();

const LocalMallContextProvider = ({ children }) => {
  const [localMall, setLocalMall] = useState([]);
  const [typeSend, setTypeSend] = useState("")
  const [orders , setOrders] = useState({});


  const addProduct = (product) => {
    const exist = localMall.find((item) => item.id === product.id);
    if (exist) {
      const newCart = localMall.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            cantidad: item.cantidad + product.cantidad,
          };
        } else {
          return item;
        }
      });
      setLocalMall(newCart);
    } else {
      setLocalMall([...localMall, product]);
    }
  };

  const getTotalProducts = () => {
    const totalProducts = localMall.reduce((acc, product) => {
      return acc + product.cantidad;
    }, 0);
    return totalProducts;
  };

  const getTotalPriceCart = () => {
    const totalPrice = localMall.reduce((acc, product) => {
      return acc + product.precio * product.cantidad;
    }, 0);
    return totalPrice;
  };

  const removeCountProduct = (iu, count) => {
    if (count - 1 > 0) {
      const newCart = localMall.map((item) => {
        if (item.id === iu) {
          return {
            ...item,
            cantidad: item.cantidad - 1,
          };
        } else {
          return item;
        }
      });
      setLocalMall(newCart);
    }
  };

  const addCountProduct = (iu, count, stock) => {
    if (count + 1 <= stock) {
      const newCart = localMall.map((item) => {
        if (item.id === iu) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
          };
        } else {
          return item;
        }
      });
      setLocalMall(newCart);
    }
  };

  const deleteProduct = (id) => {
    setLocalMall(localMall.filter((product) => product.id !== id));
  };

  const cleanCart = () => {
    setLocalMall([]);
  };

  const addInfoContact = (info) => {
    setOrders({localMall, info})
  }

  const addMethod = (method) => {
    setOrders({...orders , method})
  }

  const buy = async () => {
    await addDoc(collection(db, typeSend), orders);
    localMall.forEach( async (product) => {
      const editProduct =  doc(db, product.category  , product.id);
        await updateDoc(editProduct , {
          stock: product.stock - product.cantidad,
        })
    })
    setLocalMall([])
    setOrders({})
    setTypeSend("")
    
  }

  const data = {
    localMall,
    addProduct,
    getTotalProducts,
    getTotalPriceCart,
    removeCountProduct,
    addCountProduct,
    deleteProduct,
    cleanCart,
    addInfoContact,
    buy,
    addMethod,
    setTypeSend
  };

  return (
    <LocalMallContext.Provider value={data}>
      {children}
    </LocalMallContext.Provider>
  );
};

export default LocalMallContextProvider;
