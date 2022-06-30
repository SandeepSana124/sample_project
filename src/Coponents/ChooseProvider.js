import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ChooseProvide.css'

const ChooseProvider = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light mx-5">
        <div class="container-fluid">
          <a class="navbar-brand display" href="#">
            <div alt="" width="30" height="24" class="d-inline-block align-text-top iconcontainer px-4" />
            <div>
              <span className='spot'>SpotWorks</span> <br />
              <span className='spot2'>Powered by [X]Cube LABS</span>
            </div>
          </a>



          <div class="shape justify-content-end"></div>
        </div>


      </nav>


      <div className='container chooseicon m-10'>

        <div className='container Rectangle mx-5 py-5 my-5'>
          <div className='spotcon'>
            <div className='cont'>
              <p className='spot'>SpotWorks</p>
              <p className='spot2'>Powered by [X]Cube LABS</p>

            </div>
            <div className='py-5'>  <h6 className='welcome'>Welcome To SpotWorks</h6>
              <p className='provider'>Please Choose a cloud Provider</p>
            </div>
          </div>
          <div className='display'>
            <div className='awscon mx-5 justify-content-center'>
              <img className='aws' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAzFBMVEX///8lLz7/mQD/kwD/lQD/lwD/kgAGGS0RHzIAFywhLDsfKjoAFSufoqcVIjQZJTa/wcUAECgACiXu7/D4+Pnd3uD//vqJjZPGyMsAFSrT1de4ur7w8fLl5uja293MztFscXl/g4qRlZusr7MxOkj/wHr/6dCanaIAACH/xoT/8uL/z5t2e4I9RVJJUFtWXGZfZW7/+O7/sVP/3bf/pjRBSVU2P0z/yY//tl//umv/16r/4sL/8uH/oyVPVWD/q0H/pjr/oCn/u3P/1rBR7Ka+AAAVB0lEQVR4nO1daWOiPBBWQUCgIGovj3pjrW09W7XWdbv7///TC+KRTE6sPd6uz7ddBZMnM5O5kiYScsjfXDXPGpf1+v39/WXjrFQ9z0s++a2Qv2l2Lmv9x6eHh8dB7fIse145ymtL9aekY+uG47gRHMPI2G6rdlY8xvs/C8E8nh3bcFzLMkNYluvothFMo1p4x2vL2fpTRndNM0nCdA3vuV7lPH2V3aEqKXSV3TNX55JjrCA/w55raeAE86BPw7YGzcOkqdzse7prUV6LvN97brKe7+f0Ha5vnySm3LRyme0TGc/pSAwym9w/EsgEfSXKjWTG5U3DMnKPZ3FlqVDq3xpcejawjEyD+vLKLf49XTiE0i22zGbuTDjM4i02RoPGaqGRM2jyA+eRu48jSud1V5fhZzOwFk3dKh74llAonsFPmq5woH38EadBfqVqGpLzcDPiNdngfJBxxLQjsDzK0BI2mLAl+NmbHHyvfSV4BC6DXiK+0rBjTMWryzF0mePpLR3XNfI9A/AaT7ABdojVdkQjPgOPeITB6+ux5uExLSvGkCd+EwmjT7yoCcYv0rQBodrWo2Cs4BGzBT7PJ2OutpmUYKhM3RrFMGrwTRVAkTXg/nAhSf5wpswfLNBlaIryLXmDuoEu4Z3cHCREAWxCSB7AnA3unkb74QzfGFUBRRlclQvP8S2GLrGrVa9jv3YD7wa8ChoXm+dnEnoZgrZDsX8A6tnAiT8JXcJ9q2ZoT5pWEHc46xjEYimi9QxedQP1gGuMapQlt35xxwq2fBe37g3aTIKJGPq1F8C2dd0IopEjUBR66Ppzv1a/bHSCQLbWfw68WKqO69CteMbZtEiTjqBFod40ecaowJXSc8KHCEi0k/16M1utBLgpXpXO6oMH5xqdjZSiYRQFvnMY55VRK1IoV89+6RS1MC1gbOou+Jwz4Qp1d7Z5jgIwRWYS+/lfxDIazj0lYi1XO4/OzlGOKUVuxuufMR6pNHRS0w0gRlfArvGMUYlKEXwjhgY+AreGfpiF1t/KNZi7Vb706EXespQUbZbG1fUadz8p1IGpIe1lAbDIM0Z16u7DdRQecTnRs+iHT0CI3Ge+fFQaSd0yLZ37pQjrvdcy9EFJHHYSCw8daGCCea4gzRTxw7Q8IDWDDrgI1s96EgfyzX7SzQq/Fay8aRj2c0cqv0MIM4wYSsBiuUxjlCdEcjNv9tpf4RsLLnCXQIAZaRKAglxC5Lwhn01sQAf6Af+8jCdEkhmmMbpixFI6O2gCLBjYN4FQitMMHwaoHjlg7X6JkxUR0Pmiz7j3zN8GLsUtKidwf8y9J/f6PkBzZIBFB6G49cR6EcKlhfLKjivzOufVIEYQhIcfChh7Agc3cQ4c0VvGahYQq+acoRzlWEYki1OEuwdN/EOpHO9HAezVRMQANJFljFAv8LqIOjw6a48Bv4zbdRC9QeH+VIBtBXi4hE11LumvQafkltGXQrncASffxANE4FUaZDby81AGmzXcXEGQwIpLkdxYYFTQTBPLl6rgIRjYCCBFXylF0IuFqVForGyqMUK/FQoaulnZdF8KbBQgmGvICe/nADjQRBJM9Pka54i1Do0PamcYabV77L1mC6f+jJ9J+lwAY0PUIMBq09cTTaeFqVH0IYYvhXtF0GKB7U5YWvhQnAn2jjJwX6imBRE1M/RvKoi9ppsvUB66BqJ2A5wNfqrqgwHdE8IwgioFNVhCdqdIHpC0Nz2tBh0faOJgpkb/Qs8I7PpkggfkpDMUPwcNFyJNRS0YNa2Gmzg8VRSCqDjZ0pXWo6MqogjuzhRjhJqeKMpDhYSaVsO9IrIK2yTCYrv2VXEaiIYo88FL9TAZEALZwDZ7D7rF0QKsc9zdIuOaMpmhc8wvciDFFEEfhTRGqCnaRPaIo0RrBsC1l2aMKQUVM/PwJS6kmKIiroqkMUJj9q25R2dISbnj/QI05/mcVjK19KRcsvCoEFOUwCtvpDFCLf7WO0d9CQoDeFWdmpO/pxYaTSP3i1WyeA8K+UrxKlsqZa+KN5U8rvcSFEFHGH6OaqK9+b8iIgRkWg0XTJOahWKleteFr8YxXclKqdFvWRl73S6XsW3PaT0NLkvFrbMiQVEW1zQiA4Sm03amGZkgmVbD/VVG1rXJ4ih4o2M/19/VBbpD9fLJ0x1QojYtyzFs+3lwmQ0ktiimqIy/gMgAebTHUccGpnuB12PDZoINarz2tICl5L2oxUuEyqVlc7rVTMvRPWOAaxHdicFnBOMpNF+ydxPRDBKPVLobEeEXvzPEdDN2rSToz+EgX+fxsx8fGAWVIrBFgykhZCAl7yInrYYXydiZjsKTsHsmrKhyepF5ODMO6DxhUVTBrQIwRmg6be/goJVcGPviaVePXQYvP0nMwrVbl/HbriuPmcN61RhFeLxWhOsNmk5DDS9ajgZpNUxx+b13A5l2qcAu1WKS1LRjN8DxKcKXHdcb1MdD+yJQVwBPqxWw+ItTaYvmItWq5t7W4xilwxpCeRThTXp4yauJZfb3/4+2leBpNTwfTksdoMjXclIL7sSoAVyy/YlDKUrgGewMKtVIqIFlz/KoMcKCMDzoywknVO1LSZIpnQt4F0MsivCiF5a7eMYz+3sgxghPq2GWzZUptFYHtsQZh6TzIBXAndG1LGwRzNjeukkwoxthz2McivDEG2qMsHQapjNoVhzNPZcxIaI07NNQ6bQ8sRPjtiQ4KlI6BAPnwXu672SrQYCWz1duqtlmo1570EnHm91WhtlrNExD02keZjGzjLQaTrdMo3SEm8aTJzr548KWVgoozdxuplaijaNwHoRvSZBHZ1GEp2+Q0LwOMvt75BlpNazmIuipBaic/TL4538M/v6YIBuG1kaMlzsoSMRoIfBaEaIdRGZ/D6SKiTo/D+gcuc2QNFSaA13nWO+caIMkMr5WkttPHnCEayZryHncM9qtVZ7I7O+Bhn/7rgb8TZkDjiMWsvf6NcswEV0JAHXor7sPon1QkiJ8G9q3MKKGBQb0JUo2ElSl2A1LAlTrLY8uS/yGNuKIjNUSupyyFOEpHm/LBuLjEDlqtHaylzvMFAlOQHBRvDdongBfjIjKCrczPIIsRXgueefJIsJFRhIWLcePlYeIcyexkG/QTjxy2ivJhneZhoq8JEV4C8mODuRpcmioMdpqIfZ7729nOCOjE57ywjMVwuNgIUBxnU0RpiDbHQoNt8hCR5OSVsO2RmZ/ljwqD0S+hLMFwBMyZBmYAnBciE0RHnxujBFioShJjXNKWg3LcvKPb8mhQJzJYvYOkufHpHx7YcF6B2wkmx0KqYfRgi1k+9im1bCmmYzEAMV4gPaFvQfAYxiejM/R5DWuYsDWP5JQLJ1GeRLNnUXRCdYhIEgVyQIGXRztgdb6Vub9sIeeTRHm0ETtm1g6jbI5oZ5ClFbD0uAcjYgFcPSPXS8ASR2ZmwQSZPsQm6ICaYyaqCmiuCNoHj8SfyzWMw6vXmAAnXScVC9wHOV2VNibXmN/FVustTFC02m0PjJUEaMvoKboaK1n5/AMAvObYEOToqgI0ku8owSYkqy5fKZn9vfog7Qa5oAerVUYdtrIUyS6wSIEPNTEW1ns7Eq4AGhL4zV1/0Y32dDVx1g2jnI/UyI8YIa3uUsrmkRWOFGGVxtxTB1wsIPYHbUB9Itp0I6B0Myhpiheqog7C2lzTZycEltDIr/ErWpheflATeoCU4Q7/KEOo5YvdqqICXA0K8amT5d97N1kKYB9cBEYrmAgSIsfKxzsY2k1rFeYvEPlUEj1hq8BOhgkMg2UNC7npCaQU7dMeD0ksIJjBTVFB6eKSIA7cjjuVgOaXp5dWb+aUjHnRi24g91BHmcpNZpyM0o1ZEnekyrCAXp6eQfRr+BFD4Irlqj9O9ygIEu9bSNJuUxjCzQd5dZRoT3emQXg/TLHkqBcuMAVo/IjvcPJ4zxTYJUxXab6ozEmPbdLQz35UJelsAM6I7iZWXiZWdJg52OuWMUWrqbR7k5ZP8RUf+h47UjlpYqyt6bleg9NmQJ0B9ZWuRc+kFd1ZRgKn68xryjjuitkU71oWPBM0G5kPCMQWVVLt7j3ToYo1+D7+VkyeNg3GV6SRlmJSsPlVKJ4+eQ8vRzOiXUqDPPFvbliu/GE907WOVyWO+REbL4vQV5nlnSSIBK66fRzaBGKUATuMsD01eYRjo2n3B8m+hGsruJeG4PGFUVK86VahiyBGIJ8fZWyyKZh3DfDan6lclPq9G1wedF1g3iCtw6kLq/HxQlIobcWgZ8RBe6L5WQ8o1/vNLPF8/NKpXJeLHXukx6tKGsJ75uDFw1GcA3bsVzHsHUHCkGmThpU3grDs3QRrjkWkm6+XG63A/Tw1pN3DUO31/3jGVs3GLfqiV0J6EWJEDCUyBO1X54YUS+7anG2HurdT4JUEY0iKZB35pE4i9WA5a0V9xIqDy/ApN1TxG+jopEqSBXR1VkMW6roxG15B8hFnBdglxGvngkvGhRPmOZL2fxU0dVhnXZyDAlb3vewdiYTnLaweJfE0W645JedKbcZClNF+iE90dSbcmkoP8hxZDzsLQ5ejE5yZ0wKhWlyvWDKyTLhdUTZXGyOrGv5/FOBEXzhL7xFhRKpWpvegJ+JyxJKIKj6UuQuJ0wVXTkxLbaRjBUW1z3BGljXT7jPWtpy5LrCEi4xY09woIfoepJJyRYuJdo/d3Bzca/MyCZ5Pbjm9TPBw+U6XDa9mjiZCy5HTzqi3FgFdG9Yt1ILXrls2VJ3CpuOHvd8Q4BCx2FE8qZjP9AEpe65liHXAN80M9e7K/Ztoy/sea0mA19vC91uSRdhq/dWhvB2oQBlzMZhpZRC6fEWuqDhH21wLhlLeDV4ashWR8+ruz/UcCPVFHyTbW5RimUzCtXG861t0LvETcvwMsJkAA/5Zq2VC9Y7Wjzdzv3f/vTHFsVm/dHIZfTwb4CEfwXECv8GiKHn3EHnXV1uEfLFbKl51mmWStmbr7vV7hioVJud+uDX40Or9fDYD/+UzLEqlT8PkvdbnnDCCSeccMIJJ5xwwgknnHDCCSeccMIJLAxf/cVLrxti2vu78O++ekDfCa9+789E1TRNUdQIiqIE/1zOp4vhVw/u6/H6MkoFjKjpFIl0wJW67P3TLPntN0VJ09hBeFLU9sVXD/SLMJwuNarwEFCW/yRH/kySnxDaOHExHXX/KQPujzRVlp8A6p/EXAssU/efkabhXIlDUGCPVolI41IvXz32z8FLOh5BAUXLxGqtlWllufjq4X8CRpq0Ddoj4SvRU2lt5X/1DD4aI4WQERQsihJ+avNZWpn/bLvtaztiQidaC63S8u3tbfJ7tVpN3gICqG5k8ORdaqufqtL+ye6kr63DC0VJjdrT3ti/uxsOkX3qYni36K0UBWcpsEXhZ8udDVOV7g8madztvohi1GEP17hgR1tjtldSVZ3+YJJkMHxDOQr8oghtbf+fSuofJ8lHrbo63f73C7IdppX0T1Y3MX4jYqTsPUYfVcH0z7ZJIswR/1JBXKHhBPMaVGX24/0kFroIRSoqKhdzLYWTtPoXPG4KEIqiPX+PHvDP09ry5Z8JcBG09xSpM/CZnwJRXlpR/61UyRqzPQsKEd8PV0QYExiln6xvF+OVmgJmd7RXJo1ikLtkMKwqbz81z/3aTQUBR1rVUGG5SO0oSKdohmZBSakE+vYT97fxaBu3ptGNa7jftghTtPnGSCM4Cr6s/bCSyd00hSgManPGe2Oj/GU8DXe2rSgFVumHbHAXewEiKZoi1popFf6SsNobq5Rq/wCF8+cpkPJIKci+vY8/0iPOWyhWe6O02mT6v3YDXruUGprS3n9hSFc/En6KLkgRS73/KUuvPWqNUZsj31nsJ64JrG+bnQsPzNL/kKWAH5hT3Kw5Jix735qrZ2uwLNKOpenrx83n2HidTugNDillhS/23itSJHzmLo10hH1t0v1fWG9/OmHVqNPaFHx3JxfplNS7JxxBilhKz8ff2l8a/p2n2TV8ZQk1Yb/lq1PqCwn0VEH9Mq0qyu+e/y0dpgt/umQ0EEVjV0gWlrtvq7JLP5xztW1LU2r08vqtaLp4fZmlOPSEBP0mjendLrRQ55S3MhBom7jOm04r2nL28k0MeEDPUhN0WKlqj/Jkb6c0Sqwt+yXNN0l7YdJSs69WOv9lntK44rMeqzaj6tHOtY4jRCEupiKTtPvp0DZNuuO7r+DpbjFdsboX8VGy2jxed3qmxfb7ZEzSfgTBOFOr7ov/aXvdxXDRmy1VCXZCsJuFdvuZ2mZ8gwd/FYOkSJy09O9Zb/HRbvjruDsKNi5JetZVeaaIb/eztPR2hmMxid2fE/ZgBET9mS4+wEIN/cX0z0oNDY/8uFRtzp79zm/UDu5JO4CkLVGh6rUDkRoegaqwh6O9SoWSI9/YGY1E43YIbYuM22aHgzBeHkTS+ndDExUo69tqPn0Z+wFZsdi6GA7DYwjt0eRtTU4MydlCVUbcgOliZ4ne57yMZdwkLlNRB5SmBmSNZu1p7+94sfBfCfm6GL76/mIx/tvr/pmNfi9TyvoYAruf7J0EBc7NRs80mscUC4vVwZIEyUqrm7YoLcKagmhCm/9QotMZnE47OaiaiKBEYrL56feo2Rb+SHr/iA9u5+GBr1TUtnhj3ThF9MpQfLy20+/Tt09EWrJlalPLV46W4Bn2iCT5t4Sq/B5LicWmxHj4fk/DeBXjNMWXIAiu57JCEdXP3m+qAe66qeOY7o9AWtV+v8h7yetS/tEZCjEeqd9S4dJaqh3HvRmGluhDGApw11t+4AZ3EIItbBSzdOxrAasfeBbG73ISxJ+NMLsXvwHhYqktP7hY4bdT34CldFpRVr3D4ofPSHF9NUtBEJgexTDQX4ILfzpRY56KOyI/s+9dsNrh7u9c/WRhCtN3y+n3rFSx4PdGIU2fwdOanm9e72TgYjFdSZQi3sVOQI86af8v6dli6PdmKfWg9JeQnnUJ4YdcW3G3mM7Smnz6XUxOoFrapDv+XuXfd2O4WN9f8p6sYZSu1NTJfLr4JlXf4+PCH/fmo0m8DGt6Q42SehvNez9NdBgYDgOqprNJZFC21+Jgp53T24tywgh5Mur2Xvzhj7A6cXExvHv1xy+93nTa/jObjVa/J8vlZLJajWZ/2tNpb7zwX49RVHoX/gMlZMYC1TFjkgAAAABJRU5ErkJggg==" data-deferred="1" class="rg_i Q4LuWd" jsname="Q4LuWd" width="186" height="120" alt="AWS icon PNG and SVG Vector Free Download" data-iml="886.8999999985099" data-atf="true"></img>
              <span>Amazon Web Services</span>

            </div>
            <div className='awscon mx-5'>
              <img data-ils="4" jsaction="rcuQ6b:trigger.M8vzZb;" class="rg_i Q4LuWd" jsname="Q4LuWd" width="186" height="160" alt="Dashboard Icon Blue | Full Size PNG Download | SeekPNG" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXefa7tL5J5kuvKywmw3BDrbeOxNMlNJTZUA&amp;usqp=CAU" />
              <span>Dashboard Tour</span>
            </div>
          </div>


          {/*  </div> */}



        </div>

      </div>
    </div>
  )
}

export default ChooseProvider
