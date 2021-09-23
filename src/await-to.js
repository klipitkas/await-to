const to = (p, err) => {
  return p.then((data) => [data, undefined]).catch((error) => [undefined, error]);
}

exports.to = to;
