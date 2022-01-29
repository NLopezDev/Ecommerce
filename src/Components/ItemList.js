promiseMethod = ()=>{
    const aux = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("TITULO")
        },3000)
    })
    aux.then((res)=>{
        console.log(res)
    })

    const test = async ()=>{
        const pro = await aux()
        return pro
    }
        
        return test()
}

handleClick = (params)=>{
    this.setState({click:2})
    console.log(this.promiseMethod)
    console.log(this.state)
    console.log(this.auxText);
}

render(){
    return(
        <>
        <Common.TitleLabel text={this.state.click} estilo="color-texto-nav-azul"></Common.TitleLabel>
        <Common.TitleLabel text={this.state.name} estilo="color-texto-nav-rojo"></Common.TitleLabel>
        <Common.TitleLabel text="ADIOS" estilo="color-texto-nav-verde"></Common.TitleLabel>
        <Common.ButlonSubmit click={this.handleClick}></Common.ButlonSubmit>
        </>)
}