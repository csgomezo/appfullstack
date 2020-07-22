<template>
    <div class="container">
        <div class="jumbotro mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Perfil</h1>
            </div>
            <table class="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>Nombre</td>
                        <td>{{nombres}}</td>
                    </tr>
                    <tr>
                        <td>Apellidos</td>
                        <td>{{apellidos}}</td>
                    </tr>
                    <tr>
                        <td>Correo</td>
                        <td>{{correo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
    data(){
        const token=localStorage.usertoken
        const decoded = jwtDecode(token)
        return{
            nombres:decoded.nombres,
            apellidos:decoded.apellidos,
            correo: decoded.correo,

        }
    }
}
</script>