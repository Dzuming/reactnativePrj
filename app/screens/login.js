import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, Button, Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import clientConfig from '..//constants/clientConfig';


export default class login extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Login',
		headerRight:
			<TouchableOpacity
				onPress={() => navigation.navigate('Home')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Home</Text>
			</TouchableOpacity>

	});
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			userPassword: ''
		}
	}

	login = () => {
		const { userName, userPassword } = this.state;
		const LoginUrl = clientConfig.LoginUrl;


		if (userName == "") {
			//alert("Please enter Email address");
			this.setState({ userName: 'Please enter Email address' })

		}

		else if (userPassword == "") {
			this.setState({ email: 'Please enter password' })
		}
		else {

			const formData = new FormData();
			formData.append('username', userName);
			formData.append('password', userPassword);

			fetch(LoginUrl, {
				method: 'POST',
				header: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body: formData,

			})

				.then((responseJson) => responseJson.json())
				.then((responseJson) => {
					if (responseJson.token != undefined) {
						alert("Successfully Login");
						this.props.navigation.navigate("Profile");
					} else {
						alert("Wrong Login Details");
						return;
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}


		Keyboard.dismiss();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={{ padding: 10, margin: 10, color: 'red' }}>{this.state.email}</Text>

				<TextInput
					placeholder="Enter Email"
					style={{ width: 200, margin: 10 }}
					onChangeText={userName => this.setState({ userName })}
				/>

				<TextInput
					placeholder="Enter Password"
					style={{ width: 200, margin: 10 }}
					onChangeText={userPassword => this.setState({ userPassword })}

				/>


				<TouchableOpacity
					onPress={this.login}
					style={{ width: 200, padding: 10, backgroundColor: 'magenta', alignItems: 'center' }}>
					<Text style={{ color: 'white' }}>Login</Text>
				</TouchableOpacity>


			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

});

//AppRegistry.registerComponent('login', () => login);
