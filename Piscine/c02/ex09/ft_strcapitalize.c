/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcapitalize.c                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/21 19:42:23 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/23 09:58:05 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	checkChar(char c)
{
	if (c >= '0' && c <= '9')
		return (0);
	else if (c >= 'A' && c <= 'Z')
		return (1);
	else if (c >= 'a' && c <= 'z')
		return (2);
	else
		return (3);
}

char	*ft_strcapitalize(char *str)
{
	int	i;

	i = -1;
	while (str[++i] != '\0')
	{
		if (i == 0 && checkChar(str[i]) == 2)
		{
			str[i] -= 32;
			continue ;
		}
		else if (checkChar(str[i - 1]) == 3 && checkChar(str[i]) == 2)
			str[i] -= 32;
		else if (checkChar(str[i - 1]) != 3 && checkChar(str[i]) == 1)
			str[i] += 32;
	}
	return (str);
}
