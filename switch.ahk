LangMode := 1

:C?*:ah::
  if (LangMode = 1)
    SendInput â
  else
    SendInput ah
  return
:C?*:Ah::
  if (LangMode = 1)
    SendInput Â
  else
    SendInput Ah
  return
:C?*:AH::
  if (LangMode = 1)
    SendInput Â
  else
    SendInput AH
  return
  
:C?*:eh::
  if (LangMode = 1)
    SendInput ê
  else
    SendInput eh
  return
:C?*:Eh::
  if (LangMode = 1)
    SendInput Ê
  else
    SendInput Eh
  return
:C?*:EH::
  if (LangMode = 1)
    SendInput Ê
  else
    SendInput EH
  return
  
:C?*:el::
  if (LangMode = 1)
    SendInput ë
  else
    SendInput el
  return
:C?*:El::
  if (LangMode = 1)
    SendInput Ë
  else
    SendInput El
  return
:C?*:EL::
  if (LangMode = 1)
    SendInput Ë
  else
    SendInput EL
  return
   
:C?*:ol::
  if (LangMode = 1)
    SendInput ö
  else
    SendInput ol
  return
:C?*:Ol::
  if (LangMode = 1)
    SendInput Ö
  else
    SendInput Ol
  return
:C?*:OL::
  if (LangMode = 1)
    SendInput Ö
  else
    SendInput OL
  return
  
:C?*:sh::
  if (LangMode = 1)
    SendInput š
  else
    SendInput sh
  return
:C?*:Sh::
  if (LangMode = 1)
    SendInput Š
  else
    SendInput Sh
  return
:C?*:SH::
  if (LangMode = 1)
    SendInput Š
  else
    SendInput SH
  return
  
:C?*:sl::
  if (LangMode = 1)
    SendInput l
  else
    SendInput sl
  return
:C?*:Sl::
  if (LangMode = 1)
    SendInput L
  else
    SendInput Sl
  return
:C?*:SL::
  if (LangMode = 1)
    SendInput L
  else
    SendInput SL
  return
  
:C?*:uh::
  if (LangMode = 1)
    SendInput û
  else
    SendInput uh
  return
:C?*:Uh::
  if (LangMode = 1)
    SendInput Û
  else
    SendInput Uh
  return
:C?*:UH::
  if (LangMode = 1)
    SendInput Û
  else
    SendInput UH
  return
   
:C?*:ul::
  if (LangMode = 1)
    SendInput ü
  else
    SendInput ul
  return
:C?*:Ul::
  if (LangMode = 1)
    SendInput Ü
  else
    SendInput Ul
  return
:C?*:UL::
  if (LangMode = 1)
    SendInput Ü
  else
    SendInput UL
  return
  
:C?*:zh::
  if (LangMode = 1)
    SendInput ž
  else
    SendInput zh
  return
:C?*:Zh::
  if (LangMode = 1)
    SendInput Ž
  else
    SendInput Zh
  return
:C?*:ZH::
  if (LangMode = 1)
    SendInput Ž
  else
    SendInput ZH
  return
  
:C?*:zl::
  if (LangMode = 1)
    SendInput r
  else
    SendInput zl
  return
:C?*:Zl::
  if (LangMode = 1)
    SendInput R
  else
    SendInput Zl
  return
:C?*:ZL::
  if (LangMode = 1)
    SendInput R
  else
    SendInput ZL
  return
  
:C?*:th::
  if (LangMode = 1)
    SendInput ţ
  else
    SendInput th
  return
:C?*:Th::
  if (LangMode = 1)
    SendInput Ţ
  else
    SendInput Th
  return
:C?*:TH::
  if (LangMode = 1)
    SendInput Ţ
  else
    SendInput TH
  return
  
Scrolllock::
  if (LangMode = 1) {
    LangMode := 0
  } else {
    LangMode := 1
  }
