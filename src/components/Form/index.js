import { Text,TextInput, View, TouchableOpacity,Vibration} from "react-native";
import React,{useState} from "react";
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form(){

const [heigth, setHeigth] = useState(null)

const [weigth, setWeigth] = useState(null)

const [messageImc, setMessageImc] = useState("preencha o peso e altura")

const [imc, setImc] = useState(null)

const [textButton, setTextButton] = useState("Calcular")

const [errorMessage, setErrorMessage] = useState(null)

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("CAMPO OBRIGATÓRIO")
    }
}


function imcCalculator(){
    return setImc((weigth / (heigth * heigth)).toFixed(2))
}

function validarImc(){
    if(weigth != null && heigth !=  null){
        imcCalculator()
        setHeigth(null)
        setWeigth(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return

    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
    
   
}

    return(
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
                style={styles.formInput}
                onChangeText={setHeigth}
                value={heigth}
                placeholder="ex: 1.78"
                keyboardType="numeric"
            />
                

            <Text  style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
                style={styles.formInput}
                onChangeText={setWeigth}
                value={weigth}
                placeholder="ex: 80.535"
                keyboardType="numeric"
            />
            <TouchableOpacity
                
               onPress={() => validarImc()}
                style={styles.buttonCalculator}
                
            >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
    );
}