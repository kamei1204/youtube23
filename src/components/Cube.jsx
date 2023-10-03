import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Cube = () => {
    const textRef = useRef();

    useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));
    // useFrameは、3D空間のフレームごとに実行される関数です。この関数の中に時間経過によって変化する処理を記入していきます。
    // 今回は、textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2としています。
    // これは、textRef.current.position.xに、Math.sin(state.clock.elapsedTime) * 2を代入しています。
    // Math.sin(state.clock.elapsedTime)は、時間経過によって変化する値を返します。
    // state.clock.elapsedTimeは、経過した時間を返します。
    return (
        <mesh>
                {/* この中にHTMLは記入できないので、HTMLの要素を表示したい場合は、HTML要素を3D空間に表示するmeshというものを使います。 */}    

                    <boxGeometry/>
                    {/* BoxGeometryは、立方体を作成するためのものです。argsを指定することで、立方体のサイズを指定できます。 */}

                    <meshStandardMaterial >
                    {/* MeshStandardMaterialは、立方体の色を設定するためのものです。colorを指定することで、色を指定できます。 光を入れないと色が出ないので注意*/}

                        <RenderTexture attach="map">
                        {/* RenderTextureは、HTML要素を3D空間に表示するためのものです。 */}
                        {/* attach="map"とすることで、HTML要素を3D空間に表示することができます。 */}

                            <PerspectiveCamera makeDefault position={[0,0,5]}/>
                            {/* PerspectiveCameraは、HTML要素を3D空間に表示するためのカメラです。 */}
                            {/* makeDefaultとすることで、このカメラをデフォルトのカメラに設定しています。 */}
                            {/* position={[0,0,3]}とすることで、カメラの位置を設定しています。 */}
                            {/* この場合、x軸方向に0、y軸方向に0、z軸方向に3の位置にカメラが設定されています。 */}
                        
                            <color attach="background" args={["red"]}/>
                            {/* colorは、カメラの背景色を設定するためのものです。 */}
                            {/* attach="background"とすることで、カメラの背景色を設定できます。 */}
                            {/* args={["red"]}とすることで、背景色を赤色に設定しています。 */}

                            <Text ref={textRef} fontSize={1} color={["#FFF"]}>
                            {/* Textは、HTML要素を3D空間に表示するためのものです。 */}
                            {/* fontSize={1}とすることで、フォントサイズを1に設定しています。 */}
                            {/* color={["#FFF"]}とすることで、フォントの色を白色に設定しています。 */}

                                idea is idea
                            </Text>
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh> 
    )
}

export default Cube