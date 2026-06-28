// ═══════════════════════════════════
// DATA
// ═══════════════════════════════════

const MODULES = [
  {
    id:1, emoji:'🐍', title:'Python Fundamentals',
    sub:'4 lessons · ~4 hours · Beginner',
    lessons:[
      {title:'What is Python & Why Learn It?', dur:'25 min', tag:'Intro',
       content:`<h3>What is Python?</h3><p>Python is a high-level, general-purpose programming language created by Guido van Rossum in 1991. It is designed to be readable, simple, and powerful — making it the #1 choice for beginners and professionals alike.</p><p>The name "Python" actually comes from Monty Python Flying Circus, a British comedy show. Fun fact!</p><h3>Why Python is the Best First Language</h3><ul><li>Reads almost like English — minimal punctuation, no semicolons</li><li>Runs on any operating system (Windows, Mac, Linux)</li><li>Used by Google, NASA, Netflix, Instagram, Spotify</li><li>Free and open-source — always will be</li><li>The #1 language in data science, AI, and automation</li></ul><h3>What Can You Build With Python?</h3><ul><li><strong>Web apps:</strong> Instagram, Pinterest, Dropbox all use Python backends</li><li><strong>Data analysis:</strong> Process millions of rows with Pandas</li><li><strong>AI & Machine Learning:</strong> TensorFlow, PyTorch are Python-first</li><li><strong>Automation:</strong> Schedule tasks, scrape websites, automate Excel</li><li><strong>Scripts:</strong> Rename files, send emails, read PDFs automatically</li></ul><div class="lp-code"><span class="kw">print</span>(<span class="str">"Hello, World! I am learning Python."</span>)
<span class="cm"># Output: Hello, World! I am learning Python.</span></div><div class="lp-note">💡 Python uses indentation (spaces/tabs) instead of curly braces {} to structure code. This is what makes it so readable!</div>`},
      {title:'Installing Python & Your First Program', dur:'30 min', tag:'Setup',
       content:`<h3>Installing Python</h3><p>Python is free to download from python.org. Always install the latest stable version (3.11+ in 2025).</p><ul><li><strong>Windows:</strong> Download the installer from python.org. Check "Add Python to PATH" during install.</li><li><strong>Mac:</strong> Python 3 usually comes pre-installed. Run python3 --version in Terminal to check.</li><li><strong>Online option:</strong> Use replit.com or python.org/shell to code in your browser — no install needed!</li></ul><h3>Writing Your First Program</h3><p>Open a text editor (VS Code, Notepad++, or even Notepad), type the following, save as hello.py, and run it:</p><div class="lp-code"><span class="cm"># my first Python program</span>
<span class="kw">print</span>(<span class="str">"Hello, World!"</span>)
<span class="kw">print</span>(<span class="str">"I am learning Python!"</span>)
<span class="kw">print</span>(<span class="num">2</span> + <span class="num">2</span>)  <span class="cm"># prints 4</span></div><h3>The print() Function</h3><p>print() is the most basic Python function. It displays output on the screen. You can print text (in quotes), numbers, and even calculations.</p><div class="lp-code"><span class="kw">print</span>(<span class="str">"text goes in quotes"</span>)
<span class="kw">print</span>(<span class="num">42</span>)
<span class="kw">print</span>(<span class="num">10</span> * <span class="num">5</span>)   <span class="cm"># prints 50</span>
<span class="kw">print</span>(<span class="str">"Sum:"</span>, <span class="num">3</span> + <span class="num">7</span>)  <span class="cm"># prints Sum: 10</span></div><div class="lp-note">💡 Run your file from the terminal with: python hello.py (Windows) or python3 hello.py (Mac/Linux)</div>`},
      {title:'Variables, Data Types & Basic Operations', dur:'40 min', tag:'Core',
       content:`<h3>Variables</h3><p>A variable is a named container that stores a value. In Python, you create a variable simply by naming it and assigning a value with =.</p><div class="lp-code"><span class="fn">name</span> = <span class="str">"Alice"</span>
<span class="fn">age</span> = <span class="num">25</span>
<span class="fn">height</span> = <span class="num">1.72</span>
<span class="fn">is_student</span> = <span class="kw">True</span>

<span class="kw">print</span>(<span class="fn">name</span>, <span class="str">"is"</span>, <span class="fn">age</span>, <span class="str">"years old"</span>)</div><h3>Data Types</h3><ul><li><strong>str</strong> — text: "hello", "Python", "123"</li><li><strong>int</strong> — whole numbers: 5, -3, 1000</li><li><strong>float</strong> — decimal numbers: 3.14, -0.5</li><li><strong>bool</strong> — True or False</li><li><strong>list</strong> — ordered collection: [1, 2, 3]</li><li><strong>dict</strong> — key-value pairs: {"name": "Alice"}</li></ul><h3>Basic Operations</h3><div class="lp-code"><span class="cm"># Math</span>
<span class="kw">print</span>(<span class="num">10</span> + <span class="num">3</span>)   <span class="cm"># 13</span>
<span class="kw">print</span>(<span class="num">10</span> - <span class="num">3</span>)   <span class="cm"># 7</span>
<span class="kw">print</span>(<span class="num">10</span> * <span class="num">3</span>)   <span class="cm"># 30</span>
<span class="kw">print</span>(<span class="num">10</span> / <span class="num">3</span>)   <span class="cm"># 3.333...</span>
<span class="kw">print</span>(<span class="num">10</span> // <span class="num">3</span>)  <span class="cm"># 3 (floor division)</span>
<span class="kw">print</span>(<span class="num">10</span> % <span class="num">3</span>)   <span class="cm"># 1 (remainder)</span>
<span class="kw">print</span>(<span class="num">2</span> ** <span class="num">10</span>)  <span class="cm"># 1024 (power)</span></div><div class="lp-note">💡 Use type() to check what type a variable is: print(type(age)) → &lt;class 'int'&gt;</div>`},
      {title:'User Input & String Formatting', dur:'35 min', tag:'Core',
       content:`<h3>Getting User Input</h3><p>The input() function pauses your program and waits for the user to type something. It always returns a string.</p><div class="lp-code"><span class="fn">name</span> = <span class="fn">input</span>(<span class="str">"What is your name? "</span>)
<span class="kw">print</span>(<span class="str">"Hello,"</span>, <span class="fn">name</span>)

<span class="fn">age</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"How old are you? "</span>))
<span class="kw">print</span>(<span class="str">"Next year you'll be"</span>, <span class="fn">age</span> + <span class="num">1</span>)</div><h3>f-Strings (The Modern Way to Format)</h3><p>f-strings let you embed variables directly into strings. Put f before the opening quote, then use {} around variable names.</p><div class="lp-code"><span class="fn">name</span> = <span class="str">"Alice"</span>
<span class="fn">age</span> = <span class="num">25</span>
<span class="fn">city</span> = <span class="str">"London"</span>

<span class="kw">print</span>(<span class="str">f"Hi, I am {name}, {age} years old, from {city}."</span>)
<span class="kw">print</span>(<span class="str">f"In 5 years I'll be {age + 5}."</span>)
<span class="kw">print</span>(<span class="str">f"Pi is approximately {3.14159:.2f}"</span>)</div><div class="lp-note">💡 f-strings were introduced in Python 3.6 and are now the standard. Always prefer f-strings over .format() or % formatting.</div>`},
    ]
  },
  {
    id:2, emoji:'🔄', title:'Control Flow & Logic',
    sub:'4 lessons · ~4 hours · Beginner',
    lessons:[
      {title:'If, Elif & Else — Making Decisions', dur:'35 min', tag:'Core',
       content:`<h3>Conditional Statements</h3><p>if/elif/else let your program make decisions based on conditions. The code inside runs only when the condition is True.</p><div class="lp-code"><span class="fn">temperature</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Temperature: "</span>))

<span class="kw">if</span> <span class="fn">temperature</span> > <span class="num">30</span>:
    <span class="kw">print</span>(<span class="str">"It is hot! Wear light clothes."</span>)
<span class="kw">elif</span> <span class="fn">temperature</span> > <span class="num">15</span>:
    <span class="kw">print</span>(<span class="str">"Nice weather. Bring a light jacket."</span>)
<span class="kw">elif</span> <span class="fn">temperature</span> > <span class="num">0</span>:
    <span class="kw">print</span>(<span class="str">"Cold. Wear a warm coat."</span>)
<span class="kw">else</span>:
    <span class="kw">print</span>(<span class="str">"Freezing! Stay indoors!"</span>)</div><h3>Comparison Operators</h3><ul><li>== equal to</li><li>!= not equal</li><li>&gt; greater than / &lt; less than</li><li>&gt;= greater or equal / &lt;= less or equal</li></ul><h3>Logical Operators</h3><div class="lp-code"><span class="fn">age</span> = <span class="num">20</span>
<span class="fn">has_id</span> = <span class="kw">True</span>

<span class="kw">if</span> <span class="fn">age</span> >= <span class="num">18</span> <span class="kw">and</span> <span class="fn">has_id</span>:
    <span class="kw">print</span>(<span class="str">"Entry allowed."</span>)
<span class="kw">else</span>:
    <span class="kw">print</span>(<span class="str">"Entry denied."</span>)</div>`},
      {title:'For Loops — Repeating Actions', dur:'40 min', tag:'Core',
       content:`<h3>For Loops</h3><p>A for loop runs a block of code once for each item in a sequence. It is one of the most powerful tools in Python.</p><div class="lp-code"><span class="cm"># Loop through a list</span>
<span class="fn">fruits</span> = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> <span class="fn">fruit</span> <span class="kw">in</span> <span class="fn">fruits</span>:
    <span class="kw">print</span>(<span class="str">f"I like {fruit}"</span>)

<span class="cm"># Loop through numbers with range()</span>
<span class="kw">for</span> <span class="fn">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):
    <span class="kw">print</span>(<span class="str">f"{i} x 7 = {i * 7}"</span>)

<span class="cm"># Loop with index using enumerate()</span>
<span class="kw">for</span> <span class="fn">i</span>, <span class="fn">fruit</span> <span class="kw">in</span> <span class="fn">enumerate</span>(<span class="fn">fruits</span>):
    <span class="kw">print</span>(<span class="str">f"Item {i}: {fruit}"</span>)</div><h3>List Comprehensions</h3><p>A concise, Pythonic way to create lists in one line:</p><div class="lp-code"><span class="fn">squares</span> = [<span class="fn">x</span>**<span class="num">2</span> <span class="kw">for</span> <span class="fn">x</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]
<span class="fn">evens</span> = [<span class="fn">x</span> <span class="kw">for</span> <span class="fn">x</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> <span class="fn">x</span> % <span class="num">2</span> == <span class="num">0</span>]
<span class="kw">print</span>(<span class="fn">squares</span>)  <span class="cm"># [0, 1, 4, 9, 16, ...]</span></div><div class="lp-note">💡 range(5) gives 0,1,2,3,4. range(1,6) gives 1,2,3,4,5. range(0,10,2) gives 0,2,4,6,8.</div>`},
      {title:'While Loops & Loop Control', dur:'35 min', tag:'Core',
       content:`<h3>While Loops</h3><p>A while loop keeps running as long as a condition is True. Use it when you do not know in advance how many times to loop.</p><div class="lp-code"><span class="fn">count</span> = <span class="num">0</span>
<span class="kw">while</span> <span class="fn">count</span> < <span class="num">5</span>:
    <span class="kw">print</span>(<span class="str">f"Count: {count}"</span>)
    <span class="fn">count</span> += <span class="num">1</span>

<span class="cm"># Password checker with while</span>
<span class="fn">password</span> = <span class="str">""</span>
<span class="kw">while</span> <span class="fn">password</span> != <span class="str">"python123"</span>:
    <span class="fn">password</span> = <span class="fn">input</span>(<span class="str">"Enter password: "</span>)
<span class="kw">print</span>(<span class="str">"Access granted!"</span>)</div><h3>break and continue</h3><div class="lp-code"><span class="cm"># break exits the loop early</span>
<span class="kw">for</span> <span class="fn">n</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">100</span>):
    <span class="kw">if</span> <span class="fn">n</span> == <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="kw">print</span>(<span class="fn">n</span>)  <span class="cm"># prints 0 1 2 3 4</span>

<span class="cm"># continue skips to next iteration</span>
<span class="kw">for</span> <span class="fn">n</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    <span class="kw">if</span> <span class="fn">n</span> % <span class="num">2</span> == <span class="num">0</span>:
        <span class="kw">continue</span>
    <span class="kw">print</span>(<span class="fn">n</span>)  <span class="cm"># prints odd numbers</span></div>`},
      {title:'Functions — Writing Reusable Code', dur:'45 min', tag:'Core',
       content:`<h3>Defining Functions</h3><p>A function is a reusable block of code that performs a specific task. Use def to define one, then call it by name.</p><div class="lp-code"><span class="kw">def</span> <span class="fn">greet</span>(<span class="fn">name</span>):
    <span class="kw">print</span>(<span class="str">f"Hello, {name}!"</span>)

<span class="fn">greet</span>(<span class="str">"Alice"</span>)
<span class="fn">greet</span>(<span class="str">"Bob"</span>)</div><h3>Parameters, Arguments & Return Values</h3><div class="lp-code"><span class="kw">def</span> <span class="fn">add</span>(<span class="fn">a</span>, <span class="fn">b</span>):
    <span class="kw">return</span> <span class="fn">a</span> + <span class="fn">b</span>

<span class="fn">result</span> = <span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)
<span class="kw">print</span>(<span class="fn">result</span>)  <span class="cm"># 8</span>

<span class="cm"># Default parameter values</span>
<span class="kw">def</span> <span class="fn">power</span>(<span class="fn">base</span>, <span class="fn">exp</span>=<span class="num">2</span>):
    <span class="kw">return</span> <span class="fn">base</span> ** <span class="fn">exp</span>

<span class="kw">print</span>(<span class="fn">power</span>(<span class="num">3</span>))     <span class="cm"># 9 (uses default exp=2)</span>
<span class="kw">print</span>(<span class="fn">power</span>(<span class="num">2</span>, <span class="num">8</span>))  <span class="cm"># 256</span></div><div class="lp-note">💡 Keep functions small — a function should do ONE thing well. This is called the Single Responsibility Principle.</div>`},
    ]
  },
  {
    id:3, emoji:'📋', title:'Data Structures',
    sub:'4 lessons · ~4 hours · Beginner',
    lessons:[
      {title:'Lists — The Most Used Data Structure', dur:'40 min', tag:'Core', content:`<h3>What is a List?</h3><p>A list is an ordered, mutable collection of items. It can hold any mix of data types and you can change it after creation.</p><div class="lp-code"><span class="fn">numbers</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="fn">mixed</span> = [<span class="str">"hello"</span>, <span class="num">42</span>, <span class="kw">True</span>, <span class="num">3.14</span>]

<span class="cm"># Accessing items (0-indexed)</span>
<span class="kw">print</span>(<span class="fn">numbers</span>[<span class="num">0</span>])   <span class="cm"># 1 (first item)</span>
<span class="kw">print</span>(<span class="fn">numbers</span>[-<span class="num">1</span>])  <span class="cm"># 5 (last item)</span>

<span class="cm"># Slicing</span>
<span class="kw">print</span>(<span class="fn">numbers</span>[<span class="num">1</span>:<span class="num">4</span>])  <span class="cm"># [2, 3, 4]</span>

<span class="cm"># Common methods</span>
<span class="fn">numbers</span>.<span class="fn">append</span>(<span class="num">6</span>)    <span class="cm"># add to end</span>
<span class="fn">numbers</span>.<span class="fn">remove</span>(<span class="num">3</span>)    <span class="cm"># remove by value</span>
<span class="fn">numbers</span>.<span class="fn">sort</span>()       <span class="cm"># sort in place</span>
<span class="kw">print</span>(<span class="fn">len</span>(<span class="fn">numbers</span>))  <span class="cm"># number of items</span></div>`},
      {title:'Dictionaries — Key-Value Storage', dur:'40 min', tag:'Core', content:`<h3>What is a Dictionary?</h3><p>A dictionary stores data as key-value pairs. Unlike lists (which use index numbers), dictionaries let you look up values by meaningful keys.</p><div class="lp-code"><span class="fn">person</span> = {
    <span class="str">"name"</span>: <span class="str">"Alice"</span>,
    <span class="str">"age"</span>: <span class="num">25</span>,
    <span class="str">"city"</span>: <span class="str">"London"</span>,
    <span class="str">"is_student"</span>: <span class="kw">True</span>
}

<span class="kw">print</span>(<span class="fn">person</span>[<span class="str">"name"</span>])           <span class="cm"># Alice</span>
<span class="fn">person</span>[<span class="str">"email"</span>] = <span class="str">"a@b.com"</span>    <span class="cm"># add key</span>
<span class="kw">del</span> <span class="fn">person</span>[<span class="str">"is_student"</span>]        <span class="cm"># remove key</span>

<span class="cm"># Loop through a dict</span>
<span class="kw">for</span> <span class="fn">key</span>, <span class="fn">value</span> <span class="kw">in</span> <span class="fn">person</span>.<span class="fn">items</span>():
    <span class="kw">print</span>(<span class="str">f"{key}: {value}"</span>)</div>`},
      {title:'Tuples & Sets', dur:'30 min', tag:'Core', content:`<h3>Tuples</h3><p>A tuple is like a list but immutable — you cannot change it after creation. Use tuples for data that should not change.</p><div class="lp-code"><span class="fn">coordinates</span> = (<span class="num">51.5</span>, -<span class="num">0.12</span>)  <span class="cm"># latitude, longitude</span>
<span class="fn">rgb</span> = (<span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>)

<span class="cm"># Tuple unpacking</span>
<span class="fn">lat</span>, <span class="fn">lon</span> = <span class="fn">coordinates</span>
<span class="fn">r</span>, <span class="fn">g</span>, <span class="fn">b</span> = <span class="fn">rgb</span></div><h3>Sets</h3><p>A set is an unordered collection with no duplicates. Perfect for membership testing and removing duplicates.</p><div class="lp-code"><span class="fn">unique</span> = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">1</span>}
<span class="kw">print</span>(<span class="fn">unique</span>)  <span class="cm"># {1, 2, 3}</span>

<span class="cm"># Remove duplicates from list</span>
<span class="fn">dupes</span> = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">3</span>,<span class="num">3</span>]
<span class="fn">clean</span> = <span class="fn">list</span>(<span class="fn">set</span>(<span class="fn">dupes</span>))  <span class="cm"># [1, 2, 3]</span></div>`},
      {title:'Strings in Depth', dur:'40 min', tag:'Core', content:`<h3>String Methods</h3><p>Strings are one of the most common data types. Python has dozens of built-in methods to manipulate them.</p><div class="lp-code"><span class="fn">text</span> = <span class="str">"  Hello, Python World!  "</span>

<span class="kw">print</span>(<span class="fn">text</span>.<span class="fn">strip</span>())       <span class="cm"># remove spaces</span>
<span class="kw">print</span>(<span class="fn">text</span>.<span class="fn">upper</span>())       <span class="cm"># HELLO, PYTHON WORLD!</span>
<span class="kw">print</span>(<span class="fn">text</span>.<span class="fn">lower</span>())       <span class="cm"># hello, python world!</span>
<span class="kw">print</span>(<span class="fn">text</span>.<span class="fn">replace</span>(<span class="str">"Python"</span>, <span class="str">"Amazing"</span>))
<span class="kw">print</span>(<span class="fn">text</span>.<span class="fn">split</span>(<span class="str">","</span>))    <span class="cm"># ["  Hello", " Python World!  "]</span>
<span class="kw">print</span>(<span class="str">"Python"</span> <span class="kw">in</span> <span class="fn">text</span>)   <span class="cm"># True</span>
<span class="kw">print</span>(<span class="fn">len</span>(<span class="fn">text</span>.<span class="fn">strip</span>()))  <span class="cm"># 22</span></div><div class="lp-note">💡 Strings are immutable — methods return a new string, they do not change the original.</div>`},
    ]
  },
  {
    id:4, emoji:'📁', title:'Files, Errors & Modules',
    sub:'4 lessons · ~4 hours · Intermediate',
    lessons:[
      {title:'Reading & Writing Files', dur:'40 min', tag:'Practical', content:`<h3>Opening Files</h3><p>Python can read and write files on your computer. Always use the with statement — it automatically closes the file when done.</p><div class="lp-code"><span class="cm"># Writing to a file</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>, <span class="str">"w"</span>) <span class="kw">as</span> <span class="fn">f</span>:
    <span class="fn">f</span>.<span class="fn">write</span>(<span class="str">"Hello from Python!\n"</span>)
    <span class="fn">f</span>.<span class="fn">write</span>(<span class="str">"This is my file."</span>)

<span class="cm"># Reading a file</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>, <span class="str">"r"</span>) <span class="kw">as</span> <span class="fn">f</span>:
    <span class="fn">content</span> = <span class="fn">f</span>.<span class="fn">read</span>()
    <span class="kw">print</span>(<span class="fn">content</span>)

<span class="cm"># Read line by line</span>
<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"notes.txt"</span>) <span class="kw">as</span> <span class="fn">f</span>:
    <span class="kw">for</span> <span class="fn">line</span> <span class="kw">in</span> <span class="fn">f</span>:
        <span class="kw">print</span>(<span class="fn">line</span>.<span class="fn">strip</span>())</div><h3>File Modes</h3><ul><li>"r" — read (default)</li><li>"w" — write (overwrites existing)</li><li>"a" — append (adds to existing)</li><li>"r+" — read and write</li></ul>`},
      {title:'Error Handling with Try/Except', dur:'35 min', tag:'Practical', content:`<h3>Why Handle Errors?</h3><p>Programs crash when something unexpected happens — a file does not exist, a user enters text instead of a number, etc. try/except lets you handle these gracefully.</p><div class="lp-code"><span class="cm"># Without error handling - CRASHES</span>
<span class="fn">number</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter a number: "</span>))

<span class="cm"># With error handling - SAFE</span>
<span class="kw">try</span>:
    <span class="fn">number</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter a number: "</span>))
    <span class="kw">print</span>(<span class="str">f"Double: {number * 2}"</span>)
<span class="kw">except</span> <span class="cls">ValueError</span>:
    <span class="kw">print</span>(<span class="str">"That is not a valid number!"</span>)
<span class="kw">except</span> <span class="cls">Exception</span> <span class="kw">as</span> <span class="fn">e</span>:
    <span class="kw">print</span>(<span class="str">f"Something went wrong: {e}"</span>)
<span class="kw">finally</span>:
    <span class="kw">print</span>(<span class="str">"Program finished."</span>)</div><div class="lp-note">💡 The finally block always runs, whether an error occurred or not. Use it for cleanup like closing files or database connections.</div>`},
      {title:'Python Modules & pip', dur:'40 min', tag:'Practical', content:`<h3>What is a Module?</h3><p>A module is a file containing Python code (functions, classes, variables) that you can import and reuse. Python comes with hundreds of built-in modules.</p><div class="lp-code"><span class="cm"># Import built-in modules</span>
<span class="kw">import</span> <span class="fn">math</span>
<span class="kw">import</span> <span class="fn">random</span>
<span class="kw">import</span> <span class="fn">datetime</span>

<span class="kw">print</span>(<span class="fn">math</span>.<span class="fn">sqrt</span>(<span class="num">144</span>))      <span class="cm"># 12.0</span>
<span class="kw">print</span>(<span class="fn">math</span>.<span class="fn">pi</span>)             <span class="cm"># 3.141592...</span>
<span class="kw">print</span>(<span class="fn">random</span>.<span class="fn">randint</span>(<span class="num">1</span>, <span class="num">6</span>)) <span class="cm"># dice roll!</span>
<span class="kw">print</span>(<span class="fn">datetime</span>.<span class="fn">date</span>.<span class="fn">today</span>())</div><h3>Installing Packages with pip</h3><p>pip is Python package manager. It lets you install thousands of third-party libraries in seconds.</p><div class="lp-code"><span class="cm"># In your terminal/command prompt:</span>
pip install requests
pip install pandas
pip install flask
pip list                  <span class="cm"># see installed packages</span>
pip install -r requirements.txt  <span class="cm"># install from file</span></div>`},
      {title:'Object-Oriented Programming Basics', dur:'50 min', tag:'Intermediate', content:`<h3>What is OOP?</h3><p>Object-Oriented Programming (OOP) organizes code around "objects" — bundles of data and functions. A class is a blueprint; an object is an instance of that blueprint.</p><div class="lp-code"><span class="kw">class</span> <span class="cls">Dog</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="fn">self</span>, <span class="fn">name</span>, <span class="fn">breed</span>):
        <span class="fn">self</span>.<span class="fn">name</span> = <span class="fn">name</span>
        <span class="fn">self</span>.<span class="fn">breed</span> = <span class="fn">breed</span>

    <span class="kw">def</span> <span class="fn">bark</span>(<span class="fn">self</span>):
        <span class="kw">return</span> <span class="str">f"{self.name} says: Woof!"</span>

    <span class="kw">def</span> <span class="fn">info</span>(<span class="fn">self</span>):
        <span class="kw">return</span> <span class="str">f"{self.name} is a {self.breed}"</span>

<span class="fn">rex</span> = <span class="cls">Dog</span>(<span class="str">"Rex"</span>, <span class="str">"Labrador"</span>)
<span class="fn">luna</span> = <span class="cls">Dog</span>(<span class="str">"Luna"</span>, <span class="str">"Husky"</span>)

<span class="kw">print</span>(<span class="fn">rex</span>.<span class="fn">bark</span>())   <span class="cm"># Rex says: Woof!</span>
<span class="kw">print</span>(<span class="fn">luna</span>.<span class="fn">info</span>())  <span class="cm"># Luna is a Husky</span></div><div class="lp-note">💡 __init__ is the constructor — it runs automatically when you create a new object. self refers to the current instance.</div>`},
    ]
  },
  {
    id:5, emoji:'🌐', title:'Real-World Python',
    sub:'4 lessons · ~4 hours · Intermediate',
    lessons:[
      {title:'Web Scraping with BeautifulSoup', dur:'50 min', tag:'Project', content:`<h3>What is Web Scraping?</h3><p>Web scraping is extracting data from websites automatically. Python requests + BeautifulSoup combo is the most beginner-friendly way to do it.</p><div class="lp-code"><span class="kw">import</span> <span class="fn">requests</span>
<span class="kw">from</span> <span class="fn">bs4</span> <span class="kw">import</span> <span class="cls">BeautifulSoup</span>

<span class="cm"># Fetch a webpage</span>
<span class="fn">url</span> = <span class="str">"https://quotes.toscrape.com"</span>
<span class="fn">response</span> = <span class="fn">requests</span>.<span class="fn">get</span>(<span class="fn">url</span>)
<span class="fn">soup</span> = <span class="cls">BeautifulSoup</span>(<span class="fn">response</span>.<span class="fn">text</span>, <span class="str">"html.parser"</span>)

<span class="cm"># Extract all quotes</span>
<span class="fn">quotes</span> = <span class="fn">soup</span>.<span class="fn">find_all</span>(<span class="str">"span"</span>, <span class="fn">class_</span>=<span class="str">"text"</span>)
<span class="kw">for</span> <span class="fn">q</span> <span class="kw">in</span> <span class="fn">quotes</span>:
    <span class="kw">print</span>(<span class="fn">q</span>.<span class="fn">get_text</span>())</div><div class="lp-note">⚠️ Always check a website's robots.txt and terms of service before scraping. Only scrape data that is publicly available and legally permitted.</div>`},
      {title:'Working with APIs', dur:'45 min', tag:'Project', content:`<h3>What is an API?</h3><p>An API (Application Programming Interface) lets your Python program communicate with external services — weather data, news, currency rates, etc.</p><div class="lp-code"><span class="kw">import</span> <span class="fn">requests</span>

<span class="cm"># Free weather API (no key needed for demo)</span>
<span class="fn">city</span> = <span class="str">"London"</span>
<span class="fn">url</span> = <span class="str">f"https://wttr.in/{city}?format=j1"</span>
<span class="fn">response</span> = <span class="fn">requests</span>.<span class="fn">get</span>(<span class="fn">url</span>)
<span class="fn">data</span> = <span class="fn">response</span>.<span class="fn">json</span>()

<span class="fn">temp</span> = <span class="fn">data</span>[<span class="str">"current_condition"</span>][<span class="num">0</span>][<span class="str">"temp_C"</span>]
<span class="kw">print</span>(<span class="str">f"Temperature in {city}: {temp}°C"</span>)</div><div class="lp-note">💡 Most APIs return JSON data. Use response.json() to convert it to a Python dictionary automatically.</div>`},
      {title:'Automation with Python', dur:'50 min', tag:'Project', content:`<h3>Automating Everyday Tasks</h3><p>Python shines at automation — repetitive tasks that would take hours manually can be done in seconds with a script.</p><div class="lp-code"><span class="kw">import</span> <span class="fn">os</span>
<span class="kw">import</span> <span class="fn">shutil</span>

<span class="cm"># Auto-organise files by extension</span>
<span class="fn">folder</span> = <span class="str">"C:/Users/You/Downloads"</span>
<span class="fn">categories</span> = {
    <span class="str">"Images"</span>: [<span class="str">".jpg"</span>, <span class="str">".png"</span>, <span class="str">".gif"</span>],
    <span class="str">"Documents"</span>: [<span class="str">".pdf"</span>, <span class="str">".docx"</span>, <span class="str">".txt"</span>],
    <span class="str">"Videos"</span>: [<span class="str">".mp4"</span>, <span class="str">".avi"</span>, <span class="str">".mkv"</span>],
}

<span class="kw">for</span> <span class="fn">filename</span> <span class="kw">in</span> <span class="fn">os</span>.<span class="fn">listdir</span>(<span class="fn">folder</span>):
    <span class="fn">ext</span> = <span class="fn">os</span>.<span class="fn">path</span>.<span class="fn">splitext</span>(<span class="fn">filename</span>)[<span class="num">1</span>].<span class="fn">lower</span>()
    <span class="kw">for</span> <span class="fn">cat</span>, <span class="fn">exts</span> <span class="kw">in</span> <span class="fn">categories</span>.<span class="fn">items</span>():
        <span class="kw">if</span> <span class="fn">ext</span> <span class="kw">in</span> <span class="fn">exts</span>:
            <span class="fn">dest</span> = <span class="fn">os</span>.<span class="fn">path</span>.<span class="fn">join</span>(<span class="fn">folder</span>, <span class="fn">cat</span>)
            <span class="fn">os</span>.<span class="fn">makedirs</span>(<span class="fn">dest</span>, <span class="fn">exist_ok</span>=<span class="kw">True</span>)
            <span class="fn">shutil</span>.<span class="fn">move</span>(<span class="fn">os</span>.<span class="fn">path</span>.<span class="fn">join</span>(<span class="fn">folder</span>, <span class="fn">filename</span>), <span class="fn">dest</span>)</div>`},
      {title:'Data Analysis with Pandas', dur:'55 min', tag:'Project', content:`<h3>What is Pandas?</h3><p>Pandas is the go-to library for data analysis in Python. It lets you load, clean, filter, and analyze tabular data (like Excel spreadsheets) with just a few lines of code.</p><div class="lp-code"><span class="kw">import</span> <span class="fn">pandas</span> <span class="kw">as</span> <span class="fn">pd</span>

<span class="cm"># Load a CSV file</span>
<span class="fn">df</span> = <span class="fn">pd</span>.<span class="fn">read_csv</span>(<span class="str">"sales.csv"</span>)

<span class="cm"># Explore the data</span>
<span class="kw">print</span>(<span class="fn">df</span>.<span class="fn">head</span>())         <span class="cm"># first 5 rows</span>
<span class="kw">print</span>(<span class="fn">df</span>.<span class="fn">describe</span>())     <span class="cm"># statistics</span>
<span class="kw">print</span>(<span class="fn">df</span>.<span class="fn">columns</span>)        <span class="cm"># column names</span>

<span class="cm"># Filter & analyze</span>
<span class="fn">top_sales</span> = <span class="fn">df</span>[<span class="fn">df</span>[<span class="str">"revenue"</span>] > <span class="num">10000</span>]
<span class="fn">monthly</span> = <span class="fn">df</span>.<span class="fn">groupby</span>(<span class="str">"month"</span>)[<span class="str">"revenue"</span>].<span class="fn">sum</span>()
<span class="fn">df</span>.<span class="fn">to_csv</span>(<span class="str">"output.csv"</span>, <span class="fn">index</span>=<span class="kw">False</span>)</div>`},
    ]
  },
  {
    id:6, emoji:'🚀', title:'Projects & Next Steps',
    sub:'4 lessons · ~4 hours · Intermediate',
    lessons:[
      {title:'Build a To-Do List App', dur:'60 min', tag:'Project', content:`<h3>Your First Complete Python App</h3><p>In this lesson we build a fully functional command-line to-do list app that saves tasks to a file. It uses everything you've learned: variables, lists, loops, functions, and file I/O.</p><div class="lp-code"><span class="kw">import</span> <span class="fn">json</span>
<span class="kw">import</span> <span class="fn">os</span>

<span class="fn">FILE</span> = <span class="str">"todos.json"</span>

<span class="kw">def</span> <span class="fn">load_tasks</span>():
    <span class="kw">if</span> <span class="fn">os</span>.<span class="fn">path</span>.<span class="fn">exists</span>(<span class="fn">FILE</span>):
        <span class="kw">with</span> <span class="fn">open</span>(<span class="fn">FILE</span>) <span class="kw">as</span> <span class="fn">f</span>:
            <span class="kw">return</span> <span class="fn">json</span>.<span class="fn">load</span>(<span class="fn">f</span>)
    <span class="kw">return</span> []

<span class="kw">def</span> <span class="fn">save_tasks</span>(<span class="fn">tasks</span>):
    <span class="kw">with</span> <span class="fn">open</span>(<span class="fn">FILE</span>, <span class="str">"w"</span>) <span class="kw">as</span> <span class="fn">f</span>:
        <span class="fn">json</span>.<span class="fn">dump</span>(<span class="fn">tasks</span>, <span class="fn">f</span>)

<span class="kw">def</span> <span class="fn">main</span>():
    <span class="fn">tasks</span> = <span class="fn">load_tasks</span>()
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">print</span>(<span class="str">"\n1. Add  2. View  3. Done  4. Quit"</span>)
        <span class="fn">choice</span> = <span class="fn">input</span>(<span class="str">"Choice: "</span>)
        <span class="kw">if</span> <span class="fn">choice</span> == <span class="str">"1"</span>:
            <span class="fn">tasks</span>.<span class="fn">append</span>({<span class="str">"task"</span>: <span class="fn">input</span>(<span class="str">"Task: "</span>), <span class="str">"done"</span>: <span class="kw">False</span>})
            <span class="fn">save_tasks</span>(<span class="fn">tasks</span>)
        <span class="kw">elif</span> <span class="fn">choice</span> == <span class="str">"4"</span>:
            <span class="kw">break</span>

<span class="fn">main</span>()</div>`},
      {title:'Number Guessing Game', dur:'40 min', tag:'Project', content:`<h3>Classic Beginner Project</h3><p>Build a complete game where the computer picks a random number and the user tries to guess it. You'll practice loops, conditionals, and user interaction.</p><div class="lp-code"><span class="kw">import</span> <span class="fn">random</span>

<span class="kw">def</span> <span class="fn">play_game</span>():
    <span class="fn">secret</span> = <span class="fn">random</span>.<span class="fn">randint</span>(<span class="num">1</span>, <span class="num">100</span>)
    <span class="fn">attempts</span> = <span class="num">0</span>
    <span class="fn">max_attempts</span> = <span class="num">7</span>

    <span class="kw">print</span>(<span class="str">"Guess my number (1-100). You have 7 tries!"</span>)

    <span class="kw">while</span> <span class="fn">attempts</span> < <span class="fn">max_attempts</span>:
        <span class="kw">try</span>:
            <span class="fn">guess</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">f"\nAttempt {attempts+1}: "</span>))
            <span class="fn">attempts</span> += <span class="num">1</span>
            <span class="kw">if</span> <span class="fn">guess</span> == <span class="fn">secret</span>:
                <span class="kw">print</span>(<span class="str">f"Correct! You got it in {attempts} tries!"</span>)
                <span class="kw">return</span>
            <span class="kw">elif</span> <span class="fn">guess</span> < <span class="fn">secret</span>:
                <span class="kw">print</span>(<span class="str">"Too low! Go higher."</span>)
            <span class="kw">else</span>:
                <span class="kw">print</span>(<span class="str">"Too high! Go lower."</span>)
        <span class="kw">except</span> <span class="cls">ValueError</span>:
            <span class="kw">print</span>(<span class="str">"Numbers only please!"</span>)

    <span class="kw">print</span>(<span class="str">f"Game over! The number was {secret}."</span>)

<span class="fn">play_game</span>()</div>`},
      {title:'Simple Web App with Flask', dur:'60 min', tag:'Advanced', content:`<h3>Your First Web App</h3><p>Flask is a lightweight web framework that lets you turn your Python scripts into web applications. It is the perfect introduction to web development with Python.</p><div class="lp-code"><span class="kw">from</span> <span class="fn">flask</span> <span class="kw">import</span> <span class="cls">Flask</span>, <span class="fn">render_template_string</span>, <span class="fn">request</span>

<span class="fn">app</span> = <span class="cls">Flask</span>(<span class="fn">__name__</span>)

<span class="fn">HTML</span> = <span class="str">"""
&lt;h1&gt;Hello from Flask!&lt;/h1&gt;
&lt;form method="post"&gt;
  &lt;input name="name" placeholder="Your name"&gt;
  &lt;button&gt;Greet me!&lt;/button&gt;
&lt;/form&gt;
{{ message }}
"""</span>

<span class="fn">@app</span>.<span class="fn">route</span>(<span class="str">"/"</span>, <span class="fn">methods</span>=[<span class="str">"GET"</span>, <span class="str">"POST"</span>])
<span class="kw">def</span> <span class="fn">home</span>():
    <span class="fn">msg</span> = <span class="str">""</span>
    <span class="kw">if</span> <span class="fn">request</span>.<span class="fn">method</span> == <span class="str">"POST"</span>:
        <span class="fn">name</span> = <span class="fn">request</span>.<span class="fn">form</span>[<span class="str">"name"</span>]
        <span class="fn">msg</span> = <span class="str">f"&lt;p&gt;Hello, {name}!&lt;/p&gt;"</span>
    <span class="kw">return</span> <span class="fn">render_template_string</span>(<span class="fn">HTML</span>, <span class="fn">message</span>=<span class="fn">msg</span>)

<span class="kw">if</span> <span class="fn">__name__</span> == <span class="str">"__main__"</span>:
    <span class="fn">app</span>.<span class="fn">run</span>(<span class="fn">debug</span>=<span class="kw">True</span>)</div>`},
      {title:'Python Career Roadmap & Next Steps', dur:'30 min', tag:'Career', content:`<h3>Congratulations! 🎉</h3><p>You've completed Learn Python in 24 Hours! You now have a solid foundation in Python — variables, loops, functions, data structures, files, OOP, and real projects.</p><h3>What to Learn Next</h3><ul><li><strong>Data Science path:</strong> NumPy → Pandas → Matplotlib → Scikit-learn</li><li><strong>Web development path:</strong> Flask → Django → REST APIs → Deployment</li><li><strong>Automation path:</strong> Selenium → Playwright → Task Scheduler → Cron jobs</li><li><strong>AI/ML path:</strong> NumPy → TensorFlow or PyTorch → Hugging Face</li></ul><h3>Build Your Portfolio</h3><p>The fastest way to get hired is to build projects. Here are 5 portfolio projects that impress employers:</p><ul><li>Web scraper that collects and saves real data</li><li>Data analysis project with visualizations</li><li>REST API with Flask or FastAPI</li><li>Automation script that solves a real problem you have</li><li>Machine learning model with a simple web interface</li></ul><h3>Your Certificate</h3><p>Click the button below to generate your free Certificate of Completion!</p>`},
    ]
  },
];

const QUIZ_QUESTIONS = [
  {q:"What does the print() function do in Python?", opts:["Saves output to a file","Displays output on the screen","Creates a printed document","Imports a module"], ans:1, exp:"print() is the basic output function in Python — it displays whatever you pass to it on the screen."},
  {q:"Which symbol is used to assign a value to a variable in Python?", opts:["==","=>","=","::"], ans:2, exp:"= is the assignment operator in Python. == is for comparison (checking if two values are equal)."},
  {q:"What will print(10 // 3) output?", opts:["3.33","3","4","1"], ans:1, exp:"// is floor division — it divides and rounds down to the nearest whole number. 10 ÷ 3 = 3.33, rounded down = 3."},
  {q:"How do you start a for loop to iterate 5 times in Python?", opts:["for i in range(5):","for i = 0 to 5:","loop 5 times:","repeat(5):"], ans:0, exp:"range(5) generates numbers 0,1,2,3,4 — giving you exactly 5 iterations. This is the standard Python way."},
  {q:"Which keyword is used to define a function in Python?", opts:["function","func","def","define"], ans:2, exp:"def is Python keyword for defining functions. Example: def my_function(): — clean and simple!"},
];

const SNIPPETS = [
  {title:"Hello World", lang:"Python Basics", code:`<span class="kw">print</span>(<span class="str">"Hello, World!"</span>)\n<span class="kw">print</span>(<span class="str">"Welcome to Python!"</span>)`},
  {title:"FizzBuzz", lang:"Loops & Logic", code:`<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">101</span>):\n    <span class="kw">if</span> i % <span class="num">15</span> == <span class="num">0</span>: <span class="kw">print</span>(<span class="str">"FizzBuzz"</span>)\n    <span class="kw">elif</span> i % <span class="num">3</span> == <span class="num">0</span>: <span class="kw">print</span>(<span class="str">"Fizz"</span>)\n    <span class="kw">elif</span> i % <span class="num">5</span> == <span class="num">0</span>: <span class="kw">print</span>(<span class="str">"Buzz"</span>)\n    <span class="kw">else</span>: <span class="kw">print</span>(i)`},
  {title:"List Comprehension", lang:"Pythonic Code", code:`squares = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]\nevens = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x%<span class="num">2</span>==<span class="num">0</span>]\n<span class="kw">print</span>(squares)\n<span class="kw">print</span>(evens)`},
  {title:"Read CSV File", lang:"File I/O", code:`<span class="kw">import</span> csv\n<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"data.csv"</span>) <span class="kw">as</span> f:\n    reader = csv.<span class="fn">DictReader</span>(f)\n    <span class="kw">for</span> row <span class="kw">in</span> reader:\n        <span class="kw">print</span>(row[<span class="str">"name"</span>], row[<span class="str">"value"</span>])`},
  {title:"Fetch JSON from API", lang:"Web & APIs", code:`<span class="kw">import</span> requests\nres = requests.<span class="fn">get</span>(<span class="str">"https://api.example.com/data"</span>)\ndata = res.<span class="fn">json</span>()\n<span class="kw">print</span>(data[<span class="str">"result"</span>])`},
  {title:"Sort Dictionary by Value", lang:"Data Structures", code:`scores = {<span class="str">"Alice"</span>: <span class="num">95</span>, <span class="str">"Bob"</span>: <span class="num">87</span>, <span class="str">"Carol"</span>: <span class="num">92</span>}\nsorted_scores = <span class="fn">sorted</span>(scores.<span class="fn">items</span>(),\n    key=<span class="kw">lambda</span> x: x[<span class="num">1</span>], reverse=<span class="kw">True</span>)\n<span class="kw">print</span>(sorted_scores)`},
  {title:"Remove List Duplicates", lang:"Data Structures", code:`items = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">3</span>,<span class="num">3</span>,<span class="num">4</span>]\nunique = <span class="fn">list</span>(<span class="fn">set</span>(items))\nunique_ordered = <span class="fn">list</span>(<span class="fn">dict</span>.<span class="fn">fromkeys</span>(items))\n<span class="kw">print</span>(unique_ordered)  <span class="cm"># keeps order</span>`},
  {title:"Timer Decorator", lang:"Advanced", code:`<span class="kw">import</span> time\n<span class="kw">def</span> <span class="fn">timer</span>(func):\n    <span class="kw">def</span> <span class="fn">wrapper</span>(*args):\n        start = time.<span class="fn">time</span>()\n        result = <span class="fn">func</span>(*args)\n        <span class="kw">print</span>(<span class="str">f"Took {time.time()-start:.2f}s"</span>)\n        <span class="kw">return</span> result\n    <span class="kw">return</span> wrapper`},
  {title:"Flatten Nested List", lang:"Pythonic Code", code:`nested = [[<span class="num">1</span>,<span class="num">2</span>],[<span class="num">3</span>,<span class="num">4</span>],[<span class="num">5</span>,<span class="num">6</span>]]\nflat = [x <span class="kw">for</span> row <span class="kw">in</span> nested <span class="kw">for</span> x <span class="kw">in</span> row]\n<span class="kw">print</span>(flat)  <span class="cm"># [1, 2, 3, 4, 5, 6]</span>`},
];

const LIBRARIES = [
  {icon:"📊",name:"Pandas",desc:"Data analysis & manipulation. Load, clean, filter CSV and Excel files.",badge:"popular",cat:"Data"},
  {icon:"🔢",name:"NumPy",desc:"Fast numerical computing with arrays and matrices.",badge:"popular",cat:"Data"},
  {icon:"📈",name:"Matplotlib",desc:"Create charts, graphs, and visualizations.",badge:"free",cat:"Data"},
  {icon:"🤖",name:"Scikit-learn",desc:"Machine learning: classification, regression, clustering.",badge:"popular",cat:"AI/ML"},
  {icon:"🧠",name:"TensorFlow",desc:"Deep learning and neural networks by Google.",badge:"popular",cat:"AI/ML"},
  {icon:"🔥",name:"PyTorch",desc:"Deep learning framework by Meta. Used in research.",badge:"popular",cat:"AI/ML"},
  {icon:"🌐",name:"Requests",desc:"Make HTTP requests to APIs and websites.",badge:"free",cat:"Web"},
  {icon:"🕷️",name:"BeautifulSoup",desc:"Parse HTML and web scraping.",badge:"free",cat:"Web"},
  {icon:"⚡",name:"Flask",desc:"Lightweight web framework for building web apps.",badge:"popular",cat:"Web"},
  {icon:"🏗️",name:"Django",desc:"Full-featured web framework — batteries included.",badge:"popular",cat:"Web"},
  {icon:"📮",name:"FastAPI",desc:"Modern, fast API framework with auto documentation.",badge:"popular",cat:"Web"},
  {icon:"📋",name:"OpenPyXL",desc:"Read and write Excel (.xlsx) files.",badge:"free",cat:"Productivity"},
  {icon:"📄",name:"PyPDF2",desc:"Read, split, and merge PDF files.",badge:"free",cat:"Productivity"},
  {icon:"🗓️",name:"schedule",desc:"Run Python functions at scheduled times.",badge:"free",cat:"Automation"},
  {icon:"🖱️",name:"Selenium",desc:"Automate web browsers for testing and scraping.",badge:"free",cat:"Automation"},
  {icon:"🎮",name:"Pygame",desc:"Build 2D games in Python.",badge:"free",cat:"Games"},
  {icon:"🎨",name:"Pillow",desc:"Image processing — resize, convert, filter images.",badge:"free",cat:"Media"},
  {icon:"🎵",name:"pydub",desc:"Manipulate audio files: trim, merge, convert.",badge:"free",cat:"Media"},
  {icon:"📦",name:"SQLite3",desc:"Built-in database — no install needed.",badge:"free",cat:"Database"},
  {icon:"🔐",name:"cryptography",desc:"Encrypt and decrypt data securely.",badge:"free",cat:"Security"},
  {icon:"📬",name:"smtplib",desc:"Send emails programmatically (built-in).",badge:"free",cat:"Productivity"},
  {icon:"🌍",name:"Scrapy",desc:"Full web scraping framework for large projects.",badge:"popular",cat:"Web"},
  {icon:"📱",name:"Kivy",desc:"Build mobile apps with Python.",badge:"free",cat:"Mobile"},
  {icon:"🔍",name:"re",desc:"Regular expressions for pattern matching (built-in).",badge:"free",cat:"Text"},
];

const ROADMAP_DATA = [
  {emoji:"🌱",color:"#22C55E",type:"done",title:"Stage 1: Python Basics (Hours 1–4)",desc:"Variables, data types, print(), input(), f-strings, basic math. You'll write your first real programs.",tags:["Module 1","Variables","Strings"]},
  {emoji:"🔄",color:"#F97316",type:"done",title:"Stage 2: Control Flow (Hours 5–8)",desc:"if/elif/else, for loops, while loops, functions. Your programs start making decisions and repeating tasks.",tags:["Module 2","Loops","Functions"]},
  {emoji:"📋",color:"#3B82F6",type:"curr",title:"Stage 3: Data Structures (Hours 9–12)",desc:"Lists, dictionaries, tuples, sets. Store and organize complex data in powerful ways.",tags:["Module 3","Lists","Dicts"]},
  {emoji:"📁",color:"#8B5CF6",type:"lock",title:"Stage 4: Files & OOP (Hours 13–16)",desc:"Read/write files, handle errors, use modules, write your first classes.",tags:["Module 4","Files","Classes"]},
  {emoji:"🌐",color:"#EC4899",type:"lock",title:"Stage 5: Real-World Python (Hours 17–20)",desc:"Web scraping, APIs, automation, Pandas. Write programs that interact with the internet and real data.",tags:["Module 5","APIs","Pandas"]},
  {emoji:"🚀",color:"#D97706",type:"lock",title:"Stage 6: Projects & Career (Hours 21–24)",desc:"Build complete apps, learn Flask basics, and plan your Python career path.",tags:["Module 6","Projects","Career"]},
  {emoji:"🏆",color:"#16A34A",type:"lock",title:"Graduate: Free Certificate",desc:"Complete all 6 modules and 6 quizzes to unlock your Python certificate of completion.",tags:["Certificate","Portfolio"]},
];

const BA_DATA = [
  {task:"Rename 500 files",before:"Click each file, press F2, retype name, repeat 500 times",bt:"⏱ 3+ hours",after:"Write a 10-line Python script once, run it",at:"⚡ 30 seconds"},
  {task:"Analyze sales data",before:"Open Excel, filter manually, copy-paste into charts",bt:"⏱ 2 hours",after:"Load CSV with Pandas, run groupby, auto-chart",at:"⚡ 5 minutes"},
  {task:"Check website prices daily",before:"Visit 10 sites daily, manually compare and note prices",bt:"⏱ 1 hour/day",after:"Scrape all 10 sites with Python, email yourself the results",at:"⚡ 0 minutes (automated)"},
  {task:"Send personalized emails",before:"Copy-paste names and details into each email manually",bt:"⏱ 4 hours for 200 emails",after:"One Python script with CSV of names sends all 200",at:"⚡ 2 minutes"},
  {task:"Extract data from PDFs",before:"Open each PDF, manually copy text, paste into spreadsheet",bt:"⏱ Days of work",after:"PyPDF2 extracts all text automatically across 1000 files",at:"⚡ Under a minute"},
];

const TESTIMONIALS = [
  {stars:"★★★★★",text:"I tried learning Python 3 times before. This course finally made it click. The code examples in every lesson make the difference — I can actually write programs now!",name:"Priya S.",role:"Marketing Manager",country:"India",init:"PS"},
  {stars:"★★★★★",text:"Finished the course in a weekend. The automation module alone saved me 5 hours this week. I automated our weekly reporting and my boss was genuinely impressed.",name:"Marcus W.",role:"Operations Analyst",country:"Germany",init:"MW"},
  {stars:"★★★★★",text:"As a 52-year-old non-techie, I was terrified. But the explanations are so clear. I built my first web scraper in Week 2 and I could not stop smiling.",name:"Linda K.",role:"Teacher",country:"Australia",init:"LK"},
  {stars:"★★★★★",text:"The data analysis module with Pandas is worth the entire course on its own. I now process our monthly data reports in minutes instead of hours.",name:"Raj P.",role:"Data Analyst",country:"UK",init:"RP"},
  {stars:"★★★★★",text:"I've been recommending this to everyone in my team. Free, up-to-date, and actually teaches real Python — not toy examples. The quizzes make sure you actually learn.",name:"Sofia M.",role:"Product Manager",country:"Brazil",init:"SM"},
  {stars:"★★★★★",text:"Got my first Python developer job 4 months after starting this course. The project lessons are what made the difference in my portfolio and interviews.",name:"Chen L.",role:"Junior Dev",country:"Canada",init:"CL"},
];

const CAREERS = [
  {icon:"🐍",title:"Python Developer",salary:"$75K–$140K/yr",desc:"Build applications, APIs, and tools using Python",badge:"High Demand"},
  {icon:"📊",title:"Data Analyst",salary:"$60K–$110K/yr",desc:"Use Pandas and SQL to analyze and visualize data",badge:"Entry-Friendly"},
  {icon:"🤖",title:"ML Engineer",salary:"$100K–$180K/yr",desc:"Build machine learning models with Python and TensorFlow",badge:"Top Paying"},
  {icon:"🌐",title:"Backend Developer",salary:"$80K–$150K/yr",desc:"Build web APIs and servers with Django or Flask",badge:"Growing"},
  {icon:"🔬",title:"Data Scientist",salary:"$90K–$160K/yr",desc:"Statistical analysis, modeling, predictive analytics",badge:"Premium"},
  {icon:"🤖",title:"AI/LLM Engineer",salary:"$120K–$200K/yr",desc:"Build AI applications using Python and LLM APIs",badge:"Hottest 2025"},
  {icon:"⚙️",title:"DevOps Engineer",salary:"$85K–$155K/yr",desc:"Python scripts for CI/CD, infrastructure, and automation",badge:"Stable"},
  {icon:"🕷️",title:"Web Scraping Specialist",salary:"$50K–$100K/yr",desc:"Build data collection pipelines for businesses",badge:"Freelance"},
  {icon:"🔐",title:"Security Engineer",salary:"$90K–$160K/yr",desc:"Write Python tools for penetration testing and defense",badge:"Niche"},
  {icon:"🧪",title:"QA Automation Engineer",salary:"$65K–$120K/yr",desc:"Automate software testing with Python and Selenium",badge:"Stable"},
];

const MISTAKES = [
  {title:"Trying to Memorize Syntax",fix:"<strong>Fix:</strong> Python syntax is learnt by doing, not memorizing. Code every day and it sticks naturally. Use docs when stuck."},
  {title:"Not Running the Code",fix:"<strong>Fix:</strong> Every lesson has code examples. Type them out and run them yourself — do not just read them. Muscle memory matters."},
  {title:"Skipping Error Messages",fix:"<strong>Fix:</strong> Error messages tell you exactly what is wrong and on which line. Read them carefully — they're your best debugging tool."},
  {title:"Copying Code Without Understanding",fix:"<strong>Fix:</strong> Always type code yourself. When you copy, you miss the patterns that make Python click."},
  {title:"Overcomplicating Solutions",fix:"<strong>Fix:</strong> Python motto is 'Simple is better than complex.' If your solution is long, there is probably a simpler Python way."},
  {title:"Not Using Python Built-ins",fix:"<strong>Fix:</strong> Before writing a function, check if Python already has it. len(), sorted(), enumerate(), zip() save enormous time."},
  {title:"Forgetting Indentation Rules",fix:"<strong>Fix:</strong> Python uses indentation to define code blocks. Always use 4 spaces (not tabs). One wrong indent = error."},
  {title:"Quitting When Stuck",fix:"<strong>Fix:</strong> Getting stuck is learning. Try for 15 minutes, then Google the specific error. Stack Overflow has every Python answer."},
];

const HABITS = [
  {day:1,title:"Install Python & Run Hello World (20 min)",desc:"Install Python, open a terminal, type print('Hello') and run it. That is your first program. It counts.",tool:"Python + any text editor"},
  {day:2,title:"Variables & Calculator (20 min)",desc:"Write a script that asks for your name and age, then prints something personalised. Practice f-strings.",tool:"Python basics"},
  {day:3,title:"Loops Practice (20 min)",desc:"Write 3 loops: print 1–100, print only even numbers, then build the 7 times table using range().",tool:"for loops + range()"},
  {day:4,title:"List & Dict Exercises (20 min)",desc:"Create a shopping list with a list. Create a contact card with a dict. Add, remove, and loop through both.",tool:"Lists + Dicts"},
  {day:5,title:"Functions Challenge (20 min)",desc:"Write 3 functions: one that converts Celsius to Fahrenheit, one that checks if a number is even, one that reverses a string.",tool:"def + return"},
  {day:6,title:"File Read & Write (20 min)",desc:"Write a script that reads a text file and counts the number of words. Then saves the count to a new file.",tool:"open() + with"},
  {day:7,title:"Error Handling (20 min)",desc:"Wrap your calculator from Day 2 in a try/except to handle when a user enters text instead of a number.",tool:"try/except"},
  {day:8,title:"Install & Use a Library (20 min)",desc:"pip install requests. Then fetch data from a free public API (e.g. https://catfact.ninja/fact) and print the result.",tool:"pip + requests"},
  {day:9,title:"Mini Project Day (30 min)",desc:"Build a number guessing game: computer picks 1–100, user guesses, you say higher/lower until correct.",tool:"random + while + if"},
  {day:10,title:"Review & Portfolio (20 min)",desc:"Review your 9 days of code. Pick your best script, clean it up, add comments, and save it as your first portfolio piece.",tool:"Your judgment 🐍"},
];

const FAQ = [
  {q:"Do I need any experience to start this Python course?",a:"Zero experience needed. This course starts from the very beginning — what Python is, how to install it, and your first program. The only requirement is a computer and the willingness to try."},
  {q:"How long does it actually take to learn Python?",a:"The basics take about 24 hours of focused learning — that is what this course is built around. To become job-ready takes 3–6 months of consistent practice. But you'll be writing useful scripts within a few hours of starting."},
  {q:"Is Python still worth learning in 2025?",a:"Absolutely. Python is the #1 most popular programming language in 2025 (Stack Overflow survey). It powers most AI/ML tools, is a top requirement in data jobs, and is used in web development, automation, and more. Demand is higher than ever."},
  {q:"What can I actually build with Python?",a:"Web apps (with Flask or Django), data analysis tools, automation scripts, AI and ML models, web scrapers, games, desktop apps, REST APIs, bots, and much more. Python is one of the most versatile languages in existence."},
  {q:"Do I need to buy anything?",a:"No. Python is 100% free and open source. All the libraries in this course are free. The course is free. Your certificate is free. You need a computer and an internet connection — that is it."},
  {q:"What's the difference between Python 2 and Python 3?",a:"Python 2 was officially retired in 2020. Python 3 is the current standard and what this course teaches. If you see Python 2 code online, it will not work in Python 3 without changes — just be aware of this."},
  {q:"Which Python IDE or editor should I use?",a:"VS Code is the most popular choice (free, lightweight, great Python support). PyCharm is excellent for larger projects. For beginners, even an online editor like replit.com works perfectly — no installation required."},
  {q:"Can I get a job with Python alone?",a:"Python alone will not land you a job, but Python + one specialization will. Pick a path: data analysis (add Pandas + SQL), web development (add Flask/Django), or AI/ML (add NumPy + TensorFlow). That combination is very hireable."},
  {q:"How is this different from paid Python courses?",a:"Paid courses cost $50–$200 and are often outdated. This course is maintained for free, updated regularly, and covers the same material. The only difference is we run ads to keep it free. No paywalls, no upsells — ever."},
  {q:"What should I learn after finishing this course?",a:"Depends on your goal. For data: Pandas, SQL, Matplotlib. For web: Flask then Django. For AI/ML: NumPy, scikit-learn, TensorFlow. For automation: Selenium, schedule, smtplib. The roadmap section above covers each path in detail."},
];

const GLOSSARY = [
  {term:"variable",def:"A named container that stores a value. name = 'Alice' creates a variable called name."},
  {term:"function",def:"A reusable block of code defined with def. Call it by name to execute its code."},
  {term:"loop",def:"Code that repeats: for loops run for each item in a sequence; while loops run until a condition is False."},
  {term:"list",def:"An ordered, mutable collection: [1, 2, 3]. Items accessed by index starting at 0."},
  {term:"dictionary",def:"Key-value storage: {'name': 'Alice'}. Look up values by key instead of index."},
  {term:"string",def:"Text data in quotes: 'hello' or \"hello\". Has many built-in methods like .upper(), .split()."},
  {term:"integer",def:"A whole number with no decimal: 5, -3, 1000. Math operations work as expected."},
  {term:"float",def:"A decimal number: 3.14, -0.5. Division in Python 3 always returns a float."},
  {term:"boolean",def:"True or False. Used in conditions and comparisons. bool(0) is False, bool(1) is True."},
  {term:"indentation",def:"Spaces at the start of a line that define code blocks. Python uses 4 spaces — it is mandatory."},
  {term:"module",def:"A file containing Python code you can import and reuse. import math brings in the math module."},
  {term:"library",def:"A collection of modules providing related functionality, like pandas for data or requests for HTTP."},
  {term:"class",def:"A blueprint for creating objects. Defined with class MyClass: and instantiated with obj = MyClass()."},
  {term:"object",def:"An instance of a class. If Dog is a class, rex = Dog('Rex') creates an object called rex."},
  {term:"method",def:"A function that belongs to an object. list.append() and string.upper() are methods."},
  {term:"return",def:"A keyword inside a function that sends a value back to the caller and ends the function."},
  {term:"exception",def:"An error that occurs during runtime. Use try/except to handle exceptions gracefully."},
  {term:"pip",def:"Python package manager. pip install requests installs the requests library from PyPI."},
  {term:"f-string",def:"A formatted string literal: f'Hello {name}'. Embeds variables directly into strings."},
  {term:"list comprehension",def:"A concise way to create lists: [x**2 for x in range(10)] creates a list of squares."},
  {term:"lambda",def:"An anonymous one-line function: lambda x: x*2 is equivalent to def f(x): return x*2."},
  {term:"iterator",def:"An object that returns items one at a time. Loops use iterators behind the scenes."},
  {term:"None",def:"Python null value — represents the absence of a value. Different from 0, False, or empty string."},
  {term:"__init__",def:"A special class method (constructor) that runs when you create a new instance of a class."},
];

const BLOG = [
  {emoji:"📋",cat:"Beginner Guide",title:"Python vs JavaScript: Which Should You Learn First in 2025?",excerpt:"A practical comparison for complete beginners, based on your goals and what you want to build.",date:"Mar 2025",read:"6 min",bg:"#FFF7ED"},
  {emoji:"⚙️",cat:"Automation",title:"10 Python Scripts That Will Save You 10 Hours a Week",excerpt:"Real automation scripts you can copy and run today — no prior Python experience needed.",date:"Feb 2025",read:"8 min",bg:"#F0FDF4"},
  {emoji:"📊",cat:"Data Science",title:"Pandas Tutorial: Analyze Any Dataset in Under 30 Minutes",excerpt:"A step-by-step walkthrough of loading, cleaning, and visualizing data with Python Pandas.",date:"Feb 2025",read:"10 min",bg:"#EFF6FF"},
  {emoji:"🌐",cat:"Web Dev",title:"Build Your First Flask API in 15 Minutes",excerpt:"From zero to a working REST API endpoint with Flask and Python. No prior web experience needed.",date:"Jan 2025",read:"7 min",bg:"#FFF7ED"},
  {emoji:"🤖",cat:"AI & ML",title:"Using Python to Call ChatGPT and Gemini APIs",excerpt:"How to integrate OpenAI and Google's AI APIs into your Python projects with just 10 lines of code.",date:"Mar 2025",read:"9 min",bg:"#F5F3FF"},
  {emoji:"🏆",cat:"Career",title:"Python Developer Portfolio: 5 Projects That Get You Hired",excerpt:"The exact portfolio projects hiring managers look for, and how to build each one from scratch.",date:"Mar 2025",read:"11 min",bg:"#ECFDF5"},
];

const RELATED = [
  {emoji:"🤖",title:"AI Tools for Beginners",desc:"Master ChatGPT, Gemini, Midjourney and 25 more AI tools.",meta:"24 lessons · Free · Certificate"},
  {emoji:"📊",title:"Data Science with Python",desc:"NumPy, Pandas, Matplotlib — from data to insights.",meta:"28 lessons · Intermediate · Free"},
  {emoji:"🌐",title:"Web Dev with Flask & Django",desc:"Build real web apps and REST APIs with Python.",meta:"30 lessons · Intermediate · Free"},
  {emoji:"☁️",title:"Python for Cloud & DevOps",desc:"Automate infrastructure with Python, AWS, and Docker.",meta:"20 lessons · Advanced · Free"},
];

const TIPS = [
  {text:"Use list comprehensions instead of for loops to write cleaner, faster code.",code:"[x**2 for x in range(10)]"},
  {text:"The enumerate() function gives you both index and value in a loop.",code:"for i, val in enumerate(my_list):"},
  {text:"Use .get() on dicts to avoid KeyError when a key might not exist.",code:'data.get("key", "default")'},
  {text:"f-strings are faster and cleaner than .format() or % formatting.",code:'f"Hello, {name}! You are {age}."'},
  {text:"zip() lets you loop through two lists simultaneously with one line.",code:"for a, b in zip(list1, list2):"},
];

// ═══════════════════════════════════
// STATE
// ═══════════════════════════════════
const STATE_KEY = 'py_state';
let state = JSON.parse(localStorage.getItem(STATE_KEY) || '{"done":[],"quizScores":{}}');
function saveState(){ localStorage.setItem(STATE_KEY, JSON.stringify(state)); }

let currentLessonIdx = 0;
let allLessons = [];
MODULES.forEach((m,mi) => m.lessons.forEach((l,li) => allLessons.push({...l, module:m.title, moduleIdx:mi, lessonIdx:li, globalIdx: allLessons ? allLessons.length : 0})));
// rebuild with correct globalIdx
allLessons = [];
MODULES.forEach((m,mi) => m.lessons.forEach((l,li) => {
  allLessons.push({...l, module:m.title, moduleIdx:mi, lessonIdx:li, globalIdx:allLessons.length});
}));

// ═══════════════════════════════════
// BUILDERS
// ═══════════════════════════════════

function buildTicker(){
  const msgs = [
    '🐍 <strong>31,400+</strong> learners enrolled this month',
    '✅ Completely free — no credit card ever',
    '⭐ Rated 4.9/5 by 2,841 students',
    '🏆 Free certificate on completion',
    '🚀 Most learners write their first program within 30 minutes',
    '💼 Python is the <strong>#1 in-demand language</strong> in 2025',
    '📊 Graduates report saving <strong>8+ hours/week</strong> with Python automation',
    '🌍 Learners in <strong>128 countries</strong>',
  ];
  const doubled = [...msgs,...msgs];
  document.getElementById('tickerInner').innerHTML = doubled.map(m=>`<span>${m}</span>`).join('');
}

function buildSkills(){
  const skills = [
    {icon:'💬',title:'Write Python Programs',desc:'Create real scripts that run on your computer from day one.'},
    {icon:'🔄',title:'Automate Repetitive Tasks',desc:'Rename files, send emails, process data — automatically.'},
    {icon:'📊',title:'Analyze Data with Pandas',desc:'Load CSVs, filter rows, create charts from real datasets.'},
    {icon:'🌐',title:'Scrape the Web',desc:'Extract data from any website with BeautifulSoup.'},
    {icon:'🔌',title:'Work with APIs',desc:'Connect to weather, news, AI, and any web service.'},
    {icon:'🧱',title:'Object-Oriented Programming',desc:'Write professional, reusable code with classes and objects.'},
    {icon:'🌍',title:'Build Web Apps',desc:'Create your first web application with Flask.'},
    {icon:'🛠️',title:'Debug & Handle Errors',desc:'Read error messages, fix bugs, write robust programs.'},
    {icon:'📁',title:'Work with Files',desc:'Read, write, and process text, CSV, and JSON files.'},
    {icon:'📦',title:'Use Python Libraries',desc:'Install and use thousands of free packages with pip.'},
    {icon:'🤖',title:'Intro to Machine Learning',desc:'Load data, train a model, and make predictions.'},
    {icon:'🚀',title:'Build a Portfolio Project',desc:'Ship a complete, real-world Python application.'},
  ];
  document.getElementById('skillsGrid').innerHTML = skills.map(s=>`
    <div class="skill-card">
      <div class="sc-icon">${s.icon}</div>
      <div class="sc-title">${s.title}</div>
      <div class="sc-desc">${s.desc}</div>
    </div>`).join('');
}

function buildModules(){
  document.getElementById('moduleList').innerHTML = MODULES.map((m,mi)=>`
    <div class="module-card">
      <div class="mc-header" onclick="toggleModule(${mi})">
        <div class="mc-icon-wrap">${m.emoji}</div>
        <div class="mc-meta">
          <div class="mc-title">Module ${m.id}: ${m.title}</div>
          <div class="mc-sub">${m.sub}</div>
        </div>
        <span class="mc-toggle" id="mct${mi}">▼ Show Lessons</span>
      </div>
      <div class="mc-lessons" id="mcl${mi}">
        ${m.lessons.map((l,li)=>{
          const gIdx = mi*4+li;
          const done = state.done.includes(gIdx);
          return `<div class="lesson-row ${done?'done':''}" onclick="openLesson(${gIdx})">
            <div class="lr-num">${done?'✓':gIdx+1}</div>
            <div class="lr-title">${l.title}</div>
            <span class="lr-tag">${l.tag}</span>
            <div class="lr-dur">${l.dur}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');
  updateProgress();
}

function toggleModule(mi){
  const el = document.getElementById('mcl'+mi);
  const lbl = document.getElementById('mct'+mi);
  const open = el.classList.toggle('open');
  lbl.textContent = open ? '▲ Hide Lessons' : '▼ Show Lessons';
}

function updateProgress(){
  const pct = Math.round((state.done.length / allLessons.length) * 100);
  document.getElementById('progLabel').textContent = pct + '% Complete';
  const canvas = document.getElementById('progressRing');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx=50, cy=50, r=40;
  ctx.clearRect(0,0,100,100);
  ctx.beginPath(); ctx.arc(cx,cy,r,0,2*Math.PI);
  ctx.strokeStyle='#F3F4F6'; ctx.lineWidth=8; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,r,-Math.PI/2,(2*Math.PI*pct/100)-(Math.PI/2));
  ctx.strokeStyle='#EA580C'; ctx.lineWidth=8; ctx.lineCap='round'; ctx.stroke();
  ctx.font='bold 16px Merriweather,serif'; ctx.fillStyle='#1A1A2E';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(pct+'%',cx,cy);
}

function openLesson(gIdx){
  currentLessonIdx = gIdx;
  const lesson = allLessons[gIdx];
  document.getElementById('lpModule').textContent = 'Module ' + (lesson.moduleIdx+1) + ': ' + lesson.module;
  document.getElementById('lpTitle').textContent = lesson.title;
  document.getElementById('lpBody').innerHTML = lesson.content;
  document.getElementById('lpCounter').textContent = `Lesson ${gIdx+1} of ${allLessons.length}`;
  document.getElementById('lessonOverlay').classList.add('open');
  if(!state.done.includes(gIdx)){ state.done.push(gIdx); saveState(); buildModules(); }
  if(state.done.length === allLessons.length){ setTimeout(()=>document.getElementById('certOverlay').classList.add('open'),1200); }
}

function closeLesson(){ document.getElementById('lessonOverlay').classList.remove('open'); }

function navLesson(dir){
  const next = currentLessonIdx + dir;
  if(next >= 0 && next < allLessons.length) openLesson(next);
}

function startCourse(){ toggleModule(0); document.getElementById('course').scrollIntoView({behavior:'smooth'}); }

// QUIZ
let quizIdx=0, quizScore=0, quizAnswered=false;
function buildQuiz(){ renderQuestion(); }
function renderQuestion(){
  if(quizIdx >= QUIZ_QUESTIONS.length){ showQuizResult(); return; }
  const q = QUIZ_QUESTIONS[quizIdx];
  quizAnswered = false;
  document.getElementById('quizQ').textContent = q.q;
  document.getElementById('quizBadge').textContent = `Q ${quizIdx+1} of ${QUIZ_QUESTIONS.length}`;
  document.getElementById('quizProg').textContent = `Question ${quizIdx+1} of ${QUIZ_QUESTIONS.length}`;
  document.getElementById('quizNextBtn').style.display = 'none';
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizOpts').innerHTML = q.opts.map((o,i)=>`
    <button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>`).join('');
}
function answerQuiz(i){
  if(quizAnswered) return;
  quizAnswered = true;
  const q = QUIZ_QUESTIONS[quizIdx];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o,idx)=>{ if(idx===q.ans) o.classList.add('correct'); else if(idx===i) o.classList.add('wrong'); });
  const fb = document.getElementById('quizFeedback');
  if(i===q.ans){ quizScore++; fb.className='quiz-feedback show ok'; fb.textContent='✓ Correct! '+q.exp; }
  else { fb.className='quiz-feedback show bad'; fb.textContent='✗ '+q.exp; }
  document.getElementById('quizNextBtn').style.display='inline-block';
}
function quizNext(){ quizIdx++; renderQuestion(); }
function showQuizResult(){
  document.getElementById('quizMain').style.display='none';
  const res = document.getElementById('quizResult');
  res.classList.add('show');
  const pct = Math.round(quizScore/QUIZ_QUESTIONS.length*100);
  document.getElementById('qrStars').textContent = pct>=80?'★★★★★':pct>=60?'★★★★☆':'★★★☆☆';
  document.getElementById('qrScore').textContent = `${quizScore}/${QUIZ_QUESTIONS.length} — ${pct}%`;
  document.getElementById('qrMsg').textContent = pct===100?'Perfect! You have a solid Python foundation!':pct>=80?'Great work! Almost there — review the lessons and try again.':'Keep learning and revisit the quiz — you\'ll get there!';
}
function quizReset(){ quizIdx=0; quizScore=0; quizAnswered=false; document.getElementById('quizMain').style.display=''; document.getElementById('quizResult').classList.remove('show'); renderQuestion(); }

// SNIPPETS
function buildSnippets(){
  document.getElementById('snippetGrid').innerHTML = SNIPPETS.map((s,i)=>`
    <div class="snippet-card">
      <div class="snip-bar">
        <div class="snip-dot" style="background:#FF5F57"></div>
        <div class="snip-dot" style="background:#FEBC2E"></div>
        <div class="snip-dot" style="background:#28C840"></div>
        <span class="snip-title">${s.title}</span>
        <span class="snip-label">${s.lang}</span>
      </div>
      <div class="snip-code">${s.code}</div>
      <button class="snip-copy" onclick="copySnippet(this,${i})">📋 Copy code</button>
    </div>`).join('');
}
function copySnippet(btn,i){
  const raw = SNIPPETS[i].code.replace(/<[^>]+>/g,'');
  try{navigator.clipboard.writeText(raw);}catch(e){}
  btn.textContent='✓ Copied!';
  setTimeout(()=>btn.textContent='📋 Copy code',2000);
}

// LIBRARIES
function buildLibs(){
  document.getElementById('libGrid').innerHTML = LIBRARIES.map(l=>`
    <div class="lib-card">
      <div class="lib-icon">${l.icon}</div>
      <div>
        <div class="lib-name">${l.name}</div>
        <div class="lib-desc">${l.desc}</div>
        <span class="lib-badge ${l.badge}">${l.cat} · ${l.badge==='popular'?'⭐ Popular':'Free'}</span>
      </div>
    </div>`).join('');
}

// ROADMAP
function buildRoadmap(){
  document.getElementById('roadmapWrap').innerHTML = ROADMAP_DATA.map(s=>`
    <div class="rm-step">
      <div class="rm-dot" style="background:${s.type==='lock'?'#F3F4F6':s.color}">${s.emoji}</div>
      <div class="rm-body">
        <div class="rm-title">${s.title}</div>
        <div class="rm-desc">${s.desc}</div>
        <div class="rm-tags">${s.tags.map(t=>`<span class="rm-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

// BEFORE/AFTER
function buildBA(){
  document.getElementById('baGrid').innerHTML = BA_DATA.map(b=>`
    <div class="ba-card">
      <div class="ba-task">${b.task}</div>
      <div class="ba-sides">
        <div class="ba-before"><div class="ba-label">❌ Without Python</div><div class="ba-text">${b.before}</div><div class="ba-time">${b.bt}</div></div>
        <div class="ba-after"><div class="ba-label">✅ With Python</div><div class="ba-text">${b.after}</div><div class="ba-time">${b.at}</div></div>
      </div>
    </div>`).join('');
}

// TESTIMONIALS
function buildTestimonials(){
  document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map(t=>`
    <div class="testi-card">
      <div class="tc-stars">${t.stars}</div>
      <div class="tc-text">"${t.text}"</div>
      <div class="tc-author">
        <div class="tc-avatar">${t.init}</div>
        <div><div class="tc-name">${t.name}</div><div class="tc-role">${t.role} · ${t.country}</div></div>
      </div>
    </div>`).join('');
}

// CAREERS
function buildCareers(){
  document.getElementById('careerGrid').innerHTML = CAREERS.map(c=>`
    <div class="career-card">
      <div class="cc-icon">${c.icon}</div>
      <div class="cc-title">${c.title}</div>
      <div class="cc-salary">💰 ${c.salary}</div>
      <div class="cc-desc">${c.desc}</div>
      <span class="cc-badge">${c.badge}</span>
    </div>`).join('');
}

// MISTAKES
function buildMistakes(){
  document.getElementById('mistakesGrid').innerHTML = MISTAKES.map((m,i)=>`
    <div class="mistake-card">
      <div class="mk-num">Mistake #${i+1}</div>
      <div class="mk-title">${m.title}</div>
      <div class="mk-fix">${m.fix}</div>
    </div>`).join('');
}

// HABITS
function buildHabits(){
  document.getElementById('habitsList').innerHTML = HABITS.map(h=>`
    <div class="habit-item">
      <div class="habit-day"><div class="hd-num">${h.day}</div><div class="hd-lbl">Day</div></div>
      <div>
        <div class="habit-title">${h.title}</div>
        <div class="habit-desc">${h.desc}</div>
        <span class="habit-tool">🔧 ${h.tool}</span>
      </div>
    </div>`).join('');
}

// OUTCOMES
function buildOutcomes(){
  const O = [
    {icon:'⏰',val:'8 hrs',lbl:'saved per week through Python automation'},
    {icon:'💼',val:'4 mo',lbl:'average time from start to first Python job'},
    {icon:'📈',val:'62%',lbl:'got a raise or new role within 6 months'},
    {icon:'🚀',val:'10x',lbl:'faster at data tasks after completing the course'},
    {icon:'🌍',val:'128',lbl:'countries represented in our learner community'},
    {icon:'⭐',val:'4.9',lbl:'average course rating from 2,841 reviews'},
  ];
  document.getElementById('outcomeGrid').innerHTML = O.map(o=>`
    <div class="outcome-card">
      <div class="oc-icon">${o.icon}</div>
      <div class="oc-val">${o.val}</div>
      <div class="oc-lbl">${o.lbl}</div>
    </div>`).join('');
}

// FAQ
function buildFAQ(){
  document.getElementById('faqList').innerHTML = FAQ.map((f,i)=>`
    <div class="faq-item" id="faq${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">${f.q}<span class="faq-icon">+</span></div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}
function toggleFAQ(i){ document.getElementById('faq'+i).classList.toggle('open'); }

// GLOSSARY
function buildGlossary(){
  document.getElementById('glossaryGrid').innerHTML = GLOSSARY.map(g=>`
    <div class="gloss-card">
      <div class="gloss-term">${g.term}</div>
      <div class="gloss-def">${g.def}</div>
    </div>`).join('');
}

// BLOG
function buildBlog(){
  document.getElementById('blogGrid').innerHTML = BLOG.map(b=>`
    <div class="blog-card">
      <div class="blog-thumb" style="background:${b.bg}">${b.emoji}</div>
      <div class="blog-body">
        <div class="blog-cat">${b.cat}</div>
        <div class="blog-title">${b.title}</div>
        <div class="blog-excerpt">${b.excerpt}</div>
        <div class="blog-meta"><span>📅 ${b.date}</span><span>⏱ ${b.read} read</span></div>
      </div>
    </div>`).join('');
}

// RELATED
function buildRelated(){
  document.getElementById('relatedGrid').innerHTML = RELATED.map(r=>`
    <div class="related-card">
      <div class="rc-emoji">${r.emoji}</div>
      <div class="rc-title">${r.title}</div>
      <div class="rc-desc">${r.desc}</div>
      <div class="rc-meta">${r.meta}</div>
    </div>`).join('');
}

// DAILY TIP
function setTip(){
  const t = TIPS[new Date().getDay() % TIPS.length];
  document.getElementById('tipText').textContent = t.text;
  document.getElementById('tipCode').textContent = t.code;
}

// NAV PROGRESS
window.addEventListener('scroll',()=>{
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('npFill').style.width = (window.scrollY/h*100)+'%';
});

// INIT ALL
buildTicker();
buildSkills();
buildModules();
buildQuiz();
buildSnippets();
buildLibs();
buildRoadmap();
buildBA();
buildTestimonials();
buildCareers();
buildMistakes();
buildHabits();
buildOutcomes();
buildFAQ();
buildGlossary();
buildBlog();
buildRelated();
setTip();


// ======= MODULE QUIZ DATA =======
const MOD_QUIZZES = [
  { mod:1, title:'Python Fundamentals', emoji:'🐍', questions:[
    {q:'What function displays output in Python?', opts:['show()','display()','print()','output()'], ans:2, exp:'print() is Python built-in output function. It displays whatever you pass to it on screen.'},
    {q:'Which symbol assigns a value to a variable?', opts:['==','->','=',':='], ans:2, exp:'= is the assignment operator. == is used for comparison. So: name = "Alice" stores Alice in a variable.'},
    {q:'What is the correct way to write an f-string?', opts:['f("Hello {name}")','f"Hello {name}"','"Hello" + name','"Hello %s" % name'], ans:1, exp:'f-strings prefix the opening quote with f: f"Hello {name}" — curly braces embed the variable directly.'},
    {q:'What data type is the value True in Python?', opts:['string','integer','boolean','float'], ans:2, exp:'True and False are booleans — used in conditions and logical operations.'},
  ]},
  { mod:2, title:'Control Flow & Logic', emoji:'🔄', questions:[
    {q:'Which keyword starts a conditional block in Python?', opts:['when','if','check','case'], ans:1, exp:'if is the keyword for conditional logic. The block runs when the condition is True.'},
    {q:'What does range(1, 6) produce?', opts:['1,2,3,4,5,6','0,1,2,3,4,5','1,2,3,4,5','2,3,4,5,6'], ans:2, exp:'range(1, 6) generates 1,2,3,4,5 — starts at 1, stops BEFORE 6. The end value is excluded.'},
    {q:'Which keyword exits a loop immediately?', opts:['exit','stop','break','end'], ans:2, exp:'break immediately exits the loop. continue skips to the next iteration.'},
    {q:'What keyword defines a function in Python?', opts:['function','fun','define','def'], ans:3, exp:'def is Python function keyword. Example: def greet(name): defines a function called greet.'},
  ]},
  { mod:3, title:'Data Structures', emoji:'📋', questions:[
    {q:'How do you access the first item of a list called items?', opts:['items[1]','items(0)','items[0]','items.first()'], ans:2, exp:'Python lists are zero-indexed — the first item is at index 0. items[0] gets the first element.'},
    {q:'Which data structure stores key-value pairs?', opts:['list','tuple','set','dictionary'], ans:3, exp:'A dictionary stores key-value pairs: {"name": "Alice"}. Look up values by meaningful keys.'},
    {q:'What method adds an item to the end of a list?', opts:['.add()','.push()','.insert()','.append()'], ans:3, exp:'.append() adds an item to the END of a list. .insert(index, item) adds at a specific position.'},
    {q:'Which collection type does NOT allow duplicates?', opts:['list','tuple','set','dictionary'], ans:2, exp:'A set automatically removes duplicates. {1, 2, 2, 3} becomes {1, 2, 3}.'},
  ]},
  { mod:4, title:'Files, Errors & Modules', emoji:'📁', questions:[
    {q:'What is the safest way to open a file in Python?', opts:['open(file)','file.open()','with open(file) as f:','import file'], ans:2, exp:'The with statement automatically closes the file when done, even if an error occurs.'},
    {q:'Which keyword starts error handling in Python?', opts:['catch','handle','try','error'], ans:2, exp:'try/except handles errors. try: contains the risky code; except: runs if an error occurs.'},
    {q:'How do you install a third-party package?', opts:['python install pkg','import pkg','pip install pkg','get pkg'], ans:2, exp:'pip is Python package manager. pip install requests downloads the requests library.'},
    {q:'What does self refer to inside a class method?', opts:['The class itself','The current instance','The parent class','The module'], ans:1, exp:'self refers to the specific object calling the method. It lets methods access the object own data.'},
  ]},
  { mod:5, title:'Real-World Python', emoji:'🌐', questions:[
    {q:'Which library is used to make HTTP requests in Python?', opts:['urllib2','httplib','requests','fetch'], ans:2, exp:'requests is the most popular library for HTTP calls. requests.get(url) fetches a URL.'},
    {q:'What does response.json() do?', opts:['Saves JSON to a file','Converts JSON text to a Python dict','Validates JSON format','Sends JSON to a server'], ans:1, exp:'response.json() parses the JSON response body and returns it as a Python dictionary.'},
    {q:'Which library is best for data analysis in Python?', opts:['NumPy','Matplotlib','Pandas','SciPy'], ans:2, exp:'Pandas is the go-to for data analysis — load CSVs, filter rows, group data, and calculate stats.'},
    {q:'What does BeautifulSoup do?', opts:['Creates web servers','Parses HTML for web scraping','Sends HTTP requests','Manages databases'], ans:1, exp:'BeautifulSoup parses HTML, letting you find and extract specific elements from web pages.'},
  ]},
  { mod:6, title:'Projects & Next Steps', emoji:'🚀', questions:[
    {q:'Which Python framework is best for building small web apps?', opts:['Pandas','NumPy','Flask','Pygame'], ans:2, exp:'Flask is a lightweight web framework perfect for building web apps and APIs.'},
    {q:'What is the safest way to get a value from a dictionary?', opts:['dict[key]','dict.find(key)','dict.get(key, default)','dict.fetch(key)'], ans:2, exp:'.get(key, default) returns the default value instead of raising a KeyError if the key does not exist.'},
    {q:'Which file format does json.dump() write?', opts:['CSV','XML','JSON','YAML'], ans:2, exp:'json.dump() writes Python data to a JSON file. json.load() reads it back.'},
    {q:'What does pip freeze do?', opts:['Stops Python','Lists all installed packages','Clears the cache','Upgrades all packages'], ans:1, exp:'pip freeze outputs all installed packages and their versions — useful for requirements.txt.'},
  ]},
];

// ======= MODULE QUIZ STATE =======
var mqActive = null;

function buildModQuizGrid(){
  var grid = document.getElementById('modQuizGrid');
  if(!grid) return;
  grid.innerHTML = MOD_QUIZZES.map(function(mq, i){
    var saved = state.quizScores['mod'+i];
    var scoreTxt, scoreClass, btnClass, btnTxt;
    if(saved === undefined){
      scoreTxt = 'Not taken yet'; scoreClass = 'none'; btnClass = ''; btnTxt = 'Take Quiz';
    } else if(saved >= 3){
      scoreTxt = saved+'/4 — Passed'; scoreClass = 'pass'; btnClass = 'done'; btnTxt = 'Retake Quiz';
    } else {
      scoreTxt = saved+'/4 — Try Again'; scoreClass = 'fail'; btnClass = ''; btnTxt = 'Try Again';
    }
    return '<div class="mod-quiz-card">'
      +'<div class="mqc-header"><div class="mqc-icon">'+mq.emoji+'</div>'
      +'<div><div class="mqc-title">Module '+mq.mod+': '+mq.title+'</div>'
      +'<div class="mqc-meta">4 questions &middot; Pass: 3/4</div></div></div>'
      +'<div class="mqc-score '+scoreClass+'">'+scoreTxt+'</div>'
      +'<button class="mqc-btn '+btnClass+'" onclick="openMQ('+i+')">'+btnTxt+'</button>'
      +'</div>';
  }).join('');
}

function openMQ(modIdx){
  mqActive = {modIdx:modIdx, qIdx:0, score:0, answered:false};
  var mq = MOD_QUIZZES[modIdx];
  document.getElementById('mqModLabel').textContent = 'Module ' + mq.mod;
  document.getElementById('mqPanelTitle').textContent = mq.title + ' Quiz';
  document.getElementById('mqResult').style.display = 'none';
  document.getElementById('mqResult').classList.remove('show');
  document.getElementById('mqBodyWrap').style.display = '';
  document.getElementById('mqOverlay').classList.add('open');
  renderMQ();
}

function renderMQ(){
  var mq = MOD_QUIZZES[mqActive.modIdx];
  var q = mq.questions[mqActive.qIdx];
  mqActive.answered = false;
  document.getElementById('mqQ').textContent = q.q;
  document.getElementById('mqProg').textContent = 'Q '+(mqActive.qIdx+1)+' of '+mq.questions.length;
  document.getElementById('mqNextBtn').style.display = 'none';
  document.getElementById('mqFeedback').className = 'mq-feedback';
  document.getElementById('mqFeedback').textContent = '';
  document.getElementById('mqOpts').innerHTML = q.opts.map(function(o,i){
    return '<button class="mq-opt" onclick="answerMQ('+i+')">'+o+'</button>';
  }).join('');
}

function answerMQ(i){
  if(mqActive.answered) return;
  mqActive.answered = true;
  var mq = MOD_QUIZZES[mqActive.modIdx];
  var q = mq.questions[mqActive.qIdx];
  var opts = document.querySelectorAll('.mq-opt');
  opts.forEach(function(o,idx){
    if(idx===q.ans) o.classList.add('correct');
    else if(idx===i) o.classList.add('wrong');
  });
  if(i===q.ans) mqActive.score++;
  var fb = document.getElementById('mqFeedback');
  if(i===q.ans){ fb.className='mq-feedback show ok'; fb.textContent='Correct! '+q.exp; }
  else { fb.className='mq-feedback show bad'; fb.textContent='Not quite. '+q.exp; }
  document.getElementById('mqNextBtn').style.display = 'inline-block';
}

function mqNext(){
  var mq = MOD_QUIZZES[mqActive.modIdx];
  mqActive.qIdx++;
  if(mqActive.qIdx >= mq.questions.length){
    state.quizScores['mod'+mqActive.modIdx] = mqActive.score;
    saveState();
    buildModQuizGrid();
    var allPassed = MOD_QUIZZES.every(function(_,i){ return (state.quizScores['mod'+i]||0) >= 3; });
    document.getElementById('mqBodyWrap').style.display = 'none';
    var res = document.getElementById('mqResult');
    res.style.display = 'block';
    res.classList.add('show');
    var pct = Math.round(mqActive.score/mq.questions.length*100);
    document.getElementById('mqrStars').textContent = pct===100?'★★★★':pct>=75?'★★★☆':'★★☆☆';
    document.getElementById('mqrScore').textContent = mqActive.score+'/'+mq.questions.length+' — '+pct+'%';
    document.getElementById('mqrMsg').textContent = mqActive.score >= 3
      ? 'Passed! Great work on Module '+mq.mod+'.'
      : 'Not quite — review the lessons and try again. You need 3/4 to pass.';
    if(allPassed){
      setTimeout(function(){ closeMQ(); document.getElementById('certOverlay').classList.add('open'); }, 1200);
    }
  } else {
    renderMQ();
  }
}

function mqRetry(){
  document.getElementById('mqResult').style.display='none';
  document.getElementById('mqResult').classList.remove('show');
  document.getElementById('mqBodyWrap').style.display='';
  mqActive.qIdx=0; mqActive.score=0; mqActive.answered=false;
  renderMQ();
}

function closeMQ(){ document.getElementById('mqOverlay').classList.remove('open'); }

// ======= CERTIFICATE NAME =======
function updateCertName(val){
  var display = document.getElementById('certNameDisplay');
  var input = document.getElementById('certNameInput');
  if(val && val.trim()){
    display.textContent = val.trim();
    display.style.display = 'block';
    input.style.display = 'none';
  } else {
    display.style.display = 'none';
    input.style.display = 'block';
  }
}

function printCert(){
  var input = document.getElementById('certNameInput');
  var display = document.getElementById('certNameDisplay');
  if(!display.style.display || display.style.display === 'none'){
    display.textContent = (input && input.value) ? input.value : 'Python Learner';
    display.style.display = 'block';
    if(input) input.style.display = 'none';
  }
  window.print();
}

// Wire up name input
var certInput = document.getElementById('certNameInput');
if(certInput){ certInput.addEventListener('input', function(){ updateCertName(this.value); }); }

// Set cert date
var certDateEl = document.getElementById('certDate');
if(certDateEl){ certDateEl.textContent = new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}); }

// Build module quizzes
buildModQuizGrid();
