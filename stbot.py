#TO USE THIS FILE AS A BOT:
#create python script which interfaces with discord
#implement sendmessage(msg) and delete this one:
def sendmessage(msg):
    #pass
    print(msg)
#import this file
#have said script send messages to receivemessage(msg) below
#TADA! a bot
#  -Thefam 2 Jidolk 32

import http.client, json, time, re, math, random
lexicon = {}
def updatelexicon():
    global lexicon
    conn = http.client.HTTPConnection("mr-martian.github.io")
    conn.request("GET", "/Sajem_Tan/lexicon.js")
    response = conn.getresponse()
    data = response.read().decode('utf-8')
    conn.close()
    f = data.split('\n};\n')[0].splitlines()[1:]
    s = '{'
    for l in f:
        if l.strip()[0] != '/':
            s += l
    s += '}'
    lexicon = json.loads(s)
updatelexicon()
def receivemessage(msg):
    if msg[0] == '?':
        cmdls = msg[1:].lower().split()
        cmd = cmdls[0]
        if cmd == 'now':
            gettime()
        elif cmd == 'ok':
            check(cmdls[1])
    elif msg == 'Wisdomful Beehive! We summon thee!':
        wb()
end_c = "[ckmnt]"
old_root_v = "([aeiy]|[eou]l|uh)"
old_suf_v = "([ou]|[ae]h)"
old_start_c = "([cdfgjkmnstvxz]|[sz]l|[stz]h|[fv][mn]|[sz][hl]?[mn]|th[mn])"
old_suf_c = "([cdfgjkmnstvxz]|[sz]l|[stz]h)"
old_root = re.compile('^('+old_start_c+old_root_v+')*'+old_start_c+old_root_v+end_c+'$');
old_suf = re.compile('^'+old_suf_c+'?'+old_suf_v+end_c+'?$')
old_word = re.compile('^(('+old_start_c+old_root_v+')*'+old_start_c+old_root_v+end_c+'|('+old_suf_c+'?'+old_suf_v+end_c+'?))+$')
new_root_v = "[aeiy\u00fb\u00fc\u00f6\u00eb]"
new_suf_v = "[ou\u00ea\u00e2]"
new_start_c = "([cdfgjkmnstvxzlr\u0161\u017e\u0163]|[fvlrsz\u0161\u017e\u0163][mn])"
new_suf_c = "[cdfgjkmnstvxzlr\u0161\u017e\u0163]"
nr = '('+new_start_c+new_root_v+')*'+new_start_c+new_root_v+end_c
ns = new_suf_c+'?'+new_suf_v+end_c+'?'
new_root = re.compile('^%s$' % nr);
new_suf = re.compile('^%s$' % ns)
new_word = re.compile('^((%s)|(%s))+$' % (nr, ns))
def check(word):
    if old_root.match(word):
        sendmessage('%s is a valid root under the Ancient and Time-Honored Orthography.' % word)
    elif old_suf.match(word):
        sendmessage('%s is a valid suffix under the Ancient and Time-Honored Orthography.' % word)
    elif old_word.match(word):
        sendmessage('%s is a valid word under the Ancient and Time-Honored Orthography.' % word)
    elif new_root.match(word):
        sendmessage('%s is a valid root under the Reformist Anti-Digraphist Orthography.' % word)
    elif new_suf.match(word):
        sendmessage('%s is a valid suffix under the Reformist Anti-Digraphist Orthography.' % word)
    elif new_word.match(word):
        sendmessage('%s is a valid word under the Reformist Anti-Digraphist Orthography.' % word)
    else:
        sendmessage('%s is not a valid word in any presently extant Stone-approved Latin orthography.' % word)
def gettime():
    milliseconds = (int(time.time()) - 1448861654) * 1000
    minutes, milliseconds = divmod(milliseconds, (6**6)*4)
    hours, minutes = divmod(minutes, 36)
    days, hours = divmod(hours, 10)
    years, days = divmod(days, 360)
    month = days % 9
    monthday = days % 40

    roles = ["Divolm", "Telzlnoln", "Jidolk", "Shelsheln", "Thefam", "Zatheln", "Kizhult", "Thefnolm", "Vithit"]
    sendmessage('%s %s %s %s:%s %s' % (years, roles[month], monthday, hours, minutes, milliseconds))
def wb():
    def getlist(pth):
        dct = lexicon
        for p in pth:
            dct = dct[p]
        ret = []
        for k in dct:
            if 'archaic' not in dct[k]:
                ret.append(k)
        return ret
    senmap = {
        "para": [[".\n\n", "sen", "para"], ["", "sen", "."]],
        "sen": [[" ", "VP", "obl"], [" ", "sen", "sen-conj", "sen"]],
        "sen-conj": getlist(["conjunction", "clause"]) + getlist(["conjunction", "both"]),
        "VP": [[" ", "NP", "trans-V", "NP"], [" ", "NP", "NP", "etrans-V"], [" ", "intrans-V", "NP"], [" ", "NP", "eintrans-V"]],
        "root": ["adj", "adv", "noun", "trans", "etrans", "intrans", "eintrans", "post"],
        "adj": ["adj-base", ["", "noun", "noun>adj"]],
        "adj-base": getlist(["adj"]) + getlist(["number", "decimal"]) + getlist(["number", "senary"]) + getlist(["color"]),
        "adjP": ["adj", [" ", "adv", "adjP"]],
        "adv": getlist(["adv"]),
        "verb-roots": ["trans", "etrans", "intrans", "eintrans"],
        "noun": ["noun-base", ["", "verb-roots", "verb>noun"], ["", "noun", "noun>noun"]],
        "noun-base": getlist(["noun"]) + getlist(["pronoun"]) + getlist(["color"]),
        "NP": ["noun", [" ", "adjP", "NP"], [" ", "NP", "NP-conj", "NP"]],
        "NP-conj": getlist(["conjunction", "noun"]) + getlist(["conjunction", "both"]),
        "obl": [["", "noun", "case"], [" ", "NP", "post"]],
        "trans": ["trans-base", ["", "noun", "noun>trans"], ["", "adj", "adj>trans"]],
        "trans-base": getlist(["verb", "transitive"]),
        "etrans": ["etrans-base"],
        "etrans-base": getlist(["verb", "experiencer transitive"]),
        "intrans": ["intrans-base", ["", "adj", "adj>intrans"]],
        "intrans-base": getlist(["verb", "intransitive"]),
        "eintrans": ["eintrans-base"],
        "eintrans-base": getlist(["verb", "experiencer intransitive"]),
        "post": getlist(["post"]),
        "aux": []
    }
    auxi = getlist(["aux", "i"])
    dct = lexicon['aux']['i']
    for a in auxi:
        for l in dct[a]:
            if l[0] == 'form':
                s = l[1] + '%s' + l[2]
                senmap['aux'] += [s%'i', s%'e', s%'a', s%'ul']
    auxol = getlist(["aux", "ol"])
    dct = lexicon['aux']['ol']
    for a in auxol:
        for l in dct[a]:
            if l[0] == 'form':
                s = l[1] + '%s' + l[2]
                senmap['aux'] += [s%'ol', s%'el', s%'y', s%'uh']
    for k in lexicon['suffix']:
        senmap['suffix-any' if k == 'any' else k] = getlist(['suffix', k])
    for r in senmap['root']:
        senmap[r] += [['', 'root', k], ['', k, 'suffix-any']]
    for v in ["trans", "etrans", "intrans", "eintrans"]:
        senmap[v+'-V'] = [['', v, 'aspect'], [' ', 'adv', v+'-V'], [' ', v+'-V', 'aux']]
    def choose(arr, key):
        if key.endswith("base"):
            return random.choice(arr)
        else:
            n = random.randint(-len(arr), len(arr)-1)
            if n > 0:
                return arr[n]
            else:
                return arr[0]
    def build(tree):
        if isinstance(tree, list):
            l = []
            for s in tree[1:]:
                l.append(build(s))
            return tree[0].join(l)
        elif tree in senmap:
            return build(choose(senmap[tree], tree))
        else:
            return tree
    sendmessage(build('para'))
if __name__ == '__main__':
    while True:
        receivemessage(input())
