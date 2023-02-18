import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex137Cb, useDiv112Cb, useDiv113Cb, useDiv114Cb, useDiv115Cb, useDiv116Cb, useDiv117Cb, useDiv118Cb, useDiv119Cb, useTextBox114Cb, useTextBox113Cb, useTextBox112Cb, useTextBox111Cb, useTextBox110Cb, useTextBox109Cb, useTextBox108Cb, useTextBox107Cb } from "../page-cbs/nothing";
import "../page-css/nothing.css";
import "../custom/nothing";

export default function Nothing() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex137Props = useStore((state)=>state["nothing"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["nothing"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Div112Props = useStore((state)=>state["nothing"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["nothing"]["Div112"]);
const Div112Cb = useDiv112Cb()
const Div113Props = useStore((state)=>state["nothing"]["Div113"]);
const Div113IoProps = useIoStore((state)=>state["nothing"]["Div113"]);
const Div113Cb = useDiv113Cb()
const Div114Props = useStore((state)=>state["nothing"]["Div114"]);
const Div114IoProps = useIoStore((state)=>state["nothing"]["Div114"]);
const Div114Cb = useDiv114Cb()
const Div115Props = useStore((state)=>state["nothing"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["nothing"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Div116Props = useStore((state)=>state["nothing"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["nothing"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Div117Props = useStore((state)=>state["nothing"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["nothing"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Div118Props = useStore((state)=>state["nothing"]["Div118"]);
const Div118IoProps = useIoStore((state)=>state["nothing"]["Div118"]);
const Div118Cb = useDiv118Cb()
const Div119Props = useStore((state)=>state["nothing"]["Div119"]);
const Div119IoProps = useIoStore((state)=>state["nothing"]["Div119"]);
const Div119Cb = useDiv119Cb()
const TextBox114Props = useStore((state)=>state["nothing"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["nothing"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox113Props = useStore((state)=>state["nothing"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["nothing"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox112Props = useStore((state)=>state["nothing"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["nothing"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox111Props = useStore((state)=>state["nothing"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["nothing"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox110Props = useStore((state)=>state["nothing"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["nothing"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox109Props = useStore((state)=>state["nothing"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["nothing"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox108Props = useStore((state)=>state["nothing"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["nothing"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox107Props = useStore((state)=>state["nothing"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["nothing"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()

  return (<>
  <Flex1 className="p-nothing Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Div1 className="p-nothing Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<TextBox1 className="p-nothing TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
</Div1>
<Div1 className="p-nothing Div119 bpt" {...Div119Props} {...Div119Cb} {...Div119IoProps}>
<TextBox1 className="p-nothing TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Div1>
<Div1 className="p-nothing Div118 bpt" {...Div118Props} {...Div118Cb} {...Div118IoProps}>
<TextBox1 className="p-nothing TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Div1>
<Div1 className="p-nothing Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<TextBox1 className="p-nothing TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Div1>
<Div1 className="p-nothing Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<TextBox1 className="p-nothing TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Div1>
<Div1 className="p-nothing Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<TextBox1 className="p-nothing TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Div1>
<Div1 className="p-nothing Div114 bpt" {...Div114Props} {...Div114Cb} {...Div114IoProps}>
<TextBox1 className="p-nothing TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Div1>
<Div1 className="p-nothing Div113 bpt" {...Div113Props} {...Div113Cb} {...Div113IoProps}>
<TextBox1 className="p-nothing TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Div1>
</Flex1>
  </>);
}
