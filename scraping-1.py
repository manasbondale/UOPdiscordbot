with open('./data/scraping-easy-leetcode.json','w+') as g:
    with open('./data/scraping-easy-leetcode.txt','r') as f:
        g.write('[\n')
        lines=f.readlines()
        toggle=True
        for line in lines:
            if toggle:
                problem=line.split('  ')[0]
                print('leetcode.com/problems/'+problem.lower().replace(' ','-'))
                g.write('{ "link": "leetcode.com/problems/'+problem.lower().replace(' ','-')+'", "name" : "'+problem+'", "difficulty":"easy" },\n')
            toggle= not toggle
        g.write(']')