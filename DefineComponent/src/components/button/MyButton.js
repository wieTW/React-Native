import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

// 方法四
const MyButton = props =>
    (
        <TouchableOpacity onPress={props.myOnPress}>
            {/* <Text style={[styles.info, { color: 'green' }]}> */}
            {/* <Text style={props.myStyle}> */}
            <Text style={{ color: props.myColor, backgroundColor: props.myBackgroundColor }}>
                {props.myTitle}
            </Text>
        </TouchableOpacity >
    )

export default MyButton

MyButton.prototype = {
    myOnPress: PropTypes.func,
    myTitle: PropTypes.string.isRequired,
    myColor: PropTypes.color,
    myBackgroundColor: PropTypes.color,
}

MyButton.defaultProps = {
    myTitle: 'test',
}

// 方法三
// const MyButton = props => {
//     return (
//         <TouchableOpacity onPress={props.myOnPress}>
//             <Text>
//                 {props.myTitle}
//             </Text>
//         </TouchableOpacity >
//     )
// }
// export default MyButton


// 方法二
// export default function MyButton(props) {
//     return (
//         <TouchableOpacity onPress={props.myOnPress}>
//             <Text>
//                 {props.myTitle}
//             </Text>
//         </TouchableOpacity >
//     )
// }


// 方法一
// function MyButton(props) {
//     return (
//         <TouchableOpacity onPress={props.myOnPress}>
//             <Text>
//                 {props.myTitle}
//             </Text>
//         </TouchableOpacity >
//     )
// }
// export default MyButton